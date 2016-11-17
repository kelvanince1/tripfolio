import React, {Component} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

import UsersTile from './UsersTile';
import Header from './Header';

class CompletedTripPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ownerDispName: ''
    }

    this._test = this._test.bind(this);
    this._renderMyTrip = this._renderMyTrip.bind(this);
    this.renderTiles = this._renderTiles.bind(this);
    this._deleteTrip = this._deleteTrip.bind(this);
  }

  _deleteTrip(tripId) {
    let uid = this.props.user.uid;

    this.props.firebase.database().ref(`/tripbook/${uid}/${tripId}`).remove();
  }

  _renderMyTrip() {
    let owner = this.props.params.uid;
    let tripId = this.props.params.tripId;
    let destination = this.props.params.destination;

    return (
      <div id="newTrips" >
        <h2>My Trip To {this.props.params.destination}</h2>
        <nav>
          {/* STRETCH: switch to make your trip public or private */}
          <Link to={`/planner/${owner}/${tripId}/${destination}`}>Edit</Link>
          <Link to="/Profile" onClick={() => {
            this._deleteTrip(tripId)
          }}>Delete</Link>
        </nav>
      </div>
    )
  }

  _checkUser() {
    let currentUser = this.props.user.uid;

    // The 'owner' of the trip (aka the uid of the person who created it) will need to be passed when the component is rendered
    let creator; // = this.props.params.uid;

    if(true) { // Later will be if(currentUser === creator)
      return this._renderMyTrip();
    } /* Once functionality is added to see other people's trips, think of how to render
     else {
      this._renderTrip();
    } */
  }

  _test() {
    let tripId = this.props.params.tripId;
    let destination = this.props.params.destination;
    let owner = this.props.params.uid; // <-- for now this will be current user until shareability is a thing
  }

  componentDidMount() {
    let firebase = this.props.firebase;
    let owner = this.props.params.uid;
    let tripId = this.props.params.tripId;
    let destination = this.props.params.destination;

    firebase.database().ref(`/tripbook/${owner}/${tripId}`).once('value').then(snapshot => {
      let tiles = snapshot.val().places;

      this.setState({ tiles });
    });
  }

  _renderTiles(query) {
    let tileList = _.filter(this.state.tiles, (tile, index) => {
      return tile.category === query;
    });

    return (_.map(tileList, (tile, index) => {
        let image = tile.tile["image_url"];
        let name = tile.tile.name;
        let url = tile.tile.url;

        return <UsersTile index={index} key={index} image={image} name={name} _deleteTile={this._deleteTile} _showModal={this._showSavedModal} spanClass='hidden' />
      })
    );
  }

  render() {
    let image = this.props.user.providerData ? this.props.user.providerData[0].photoURL : 'http://placehold.it/100x100'
    return(
      <div id="completed-background">
        <main>
          <div id="completed-nav">
            <Header firebase={this.props.firebase} />
            <Link to="/profile" id="profile-button-completed" className="btn btn-default">My profile</Link>
          </div>
          <div id="pic-div">
            <div id="prof-pic">
              <img src={image} alt="Profile Picture" id="profPic" />
            </div>
          </div>
          {this._checkUser()}
            <div id="edit-trip" className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div id="restaurantTiles">
                    <h4>Eat</h4>
                    {this._renderTiles('restaurants')}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div id="hotelTiles">
                    <h4>Sleep</h4>
                    {this._renderTiles('hotels')}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div id="attractionTiles">
                    <h4>See</h4>
                    {this._renderTiles('tourist%20attractions')}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div id="barTiles">
                    <h4>Drink</h4>
                    {this._renderTiles('bars')}
                  </div>
                </div>
              </div>
            </div>
        </main>
      </div>
    );
  }
}

export default CompletedTripPage;
