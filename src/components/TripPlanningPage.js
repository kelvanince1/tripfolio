// Modules
import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';

// Components
import SuggestionBox from './SuggestionBox';
import SuggestionTile from './SuggestionTile';
import TravelTileModal from './TravelTileModal';

// Styles and images

class TravelPlanningPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      modalClass: 'hidden'
    }

    this._axiosCall = this._axiosCall.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this._setActiveTab = this._setActiveTab.bind(this);
    this._showModal = this._showModal.bind(this);
    this._loadUsersTiles = this._loadUsersTiles.bind(this);
    this._removeYelpListing = this._removeYelpListing.bind(this);
  }

  _axiosCall(e) {
    let term;
    let destination = this.props.destination;
    let link = `https://thawing-cliffs-39852.herokuapp.com/${destination}`;

    // If the call originated from user clicking a link (as opposed to from the component mounting), handle the event
    if(e) {
      e.preventDefault();

      this._setActiveTab(e);

      // Get the search term from the clicked tab
      term = e.target.getAttribute("data-query");;
    }

    // If the user has clicked a filter tab, get the term they are searching for and send a corresponding request to Yelp
    if(term) {
      link += `/${term}`;
    } else {
    // By default, load results for tourist attractions

      link += "/tourist%20attractions";
    }

    axios.get(link)
      .then((response) => {
        let results = response.data.businesses;

        this.setState({ results });
      });
  }

  _showModal(index) {
    let selectedTile = this.state.results[index];

    this.setState({
      modalClass: '',
      selectedTile: selectedTile,
      selectedTileIndex: index
    })
  }

  _closeModal() {
    this.setState({
      modalClass: 'hidden'
    })
  }

  _setActiveTab(e) {
      // Remove active class from currently active link
      document.getElementsByClassName("active")[0].className = "";

      // Set the clikced tab to "active"
      e.target.className = "active";
  }

  _loadUsersTiles() {
    let firebase = this.props.firebase;
    let uid = this.props.user.uid;
    let tripId = this.props.params.tripId;

    firebase.database().ref(`/tripbook/${uid}/${tripId}`).on('value', (snapshot) => {
      let tiles = snapshot.val().places;
      console.log('tiles', tiles);

      this.setState({ tiles });
    });
  }

  _removeYelpListing(index) {
    let yelpListing = this.state.results[index];

    let newList = _.remove(this.state.results, (result) => {
      return this.state.results.indexOf(result) !== index;
    });

    this.setState({
      results: newList
    })
  }

  componentDidMount() {
    this._axiosCall();
    this._loadUsersTiles();
  }

  render() {
    return(
      <main>
        <h2>My trip to <span id="destinationName">{this.props.destination}</span></h2>
        <nav>
          <a href="#"
            onClick={this._axiosCall}
            data-query="tourist%20attractions"
            className="active">
              Attractions
          </a>
          <a href="#"
            onClick={this._axiosCall}
            data-query="food">
              Food
          </a>
          <a href="#"
            onClick={this._axiosCall}
            data-query="hotels">
              Hotels
          </a>
        </nav>
        <div>
          <h4>My Saved Tiles</h4>
          <div id="myTilesContainer">
            {_.map(this.state.tiles, (tile, index) => {
              let image = tile.tile["image_url"];
              let name = tile.tile.name;
              let url = tile.tile.url;

              return <SuggestionTile index={index} key={index} image={image} name={name} />
            })}
          </div>
        </div>
        <SuggestionBox results={this.state.results} _showModal={this._showModal} />
        <button onClick={this.props._handleClick}>Save</button>
        <TravelTileModal className={this.state.modalClass} _closeModal={this._closeModal} selectedTile={this.state.selectedTile} selectedTileIndex={this.state.selectedTileIndex} firebase={this.props.firebase} _handleClick={this.props._handleClick} user={this.props.user} destination={this.props.destination} tripId={this.props.params.tripId} _removeYelpListing={this._removeYelpListing}/>
      </main>
    );
  }
}

export default TravelPlanningPage;
