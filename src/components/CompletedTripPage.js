import React, {Component} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

import UsersTile from './UsersTile';

class CompletedTripPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ownerDispName: ''
    }

    this._test = this._test.bind(this);
    this._renderMyTrip = this._renderMyTrip.bind(this);
  }

  _renderMyTrip() {
    let owner = this.props.params.uid;
    let tripId = this.props.params.tripId;
    let destination = this.props.params.destination;

    return (
      <div className="pageHeader">
        <h2>My trip to {this.props.params.destination}</h2>
        <nav>
          {/* STRETCH: switch to make your trip public or private */}
          <Link to={`/planner/${owner}/${tripId}/${destination}`}>Edit</Link>
          <input type="text" placeholder="Search your trips" ref="searchBar" />
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

  render() {
    return(
      <main>
        {this._checkUser()}
        <div>
        {_.map(this.state.tiles, (tile, index) => {
          let image = tile.tile["image_url"];
          let name = tile.tile.name;
          let url = tile.tile.url;

          return <UsersTile index={index} key={index} image={image} name={name} spanClass='hidden' />
        })}
        </div>
        <div id="eat"></div>
        <div id="drink"></div>
        <div id="see"></div>
        <div id="sleep"></div>
      </main>
    );
  }
}

export default CompletedTripPage;
