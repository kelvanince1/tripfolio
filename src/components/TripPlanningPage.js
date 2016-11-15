// Modules
import React, {Component} from 'react';
import axios from 'axios';

// Components
import SuggestionBox from './SuggestionBox';
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
      selectedTile: selectedTile
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

  componentDidMount() {
    this._axiosCall();
  }

  render() {
    return(
      <main>
        <h2>My trip to <span id="destinationName">{this.props.destination}</span></h2>
        <nav>
          <h3>Suggestions</h3>
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
        <SuggestionBox results={this.state.results} _showModal={this._showModal} />
        <button onClick={this.props._handleClick}>Save</button>
        <TravelTileModal className={this.state.modalClass} _closeModal={this._closeModal} selectedTile={this.state.selectedTile} />
      </main>
    );
  }
}

export default TravelPlanningPage;
