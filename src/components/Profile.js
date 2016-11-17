// Modules
import React, {Component} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

// Components
import NewTripModal from './NewTripModal';
import Header from './Header';
// Styles and images

class Profile extends Component {
    constructor(props) {
      super(props);

      this._renderTrips = this._renderTrips.bind(this);
    }

    _renderTrips() {
      if (_.isEmpty(this.props.trips)) {
        return <NewTripModal />
      }
      else {
        return(
        <ul>
          {_.map(this.props.trips, (trip, tripId) => {
            let destination = _.capitalize(trip.destination);
            return (
              <li key={tripId} data-tripId={tripId}>
                My trip to {destination}
                <Link to={`/completed/${this.props.user.uid}/${tripId}/${trip.destination}`}>
                  View
                </Link>
                <Link to={`/planner/${this.props.user.uid}/${tripId}/${trip.destination}`}>
                  Edit
                </Link>
                <a href="#">Delete</a>
              </li>
            )
          })}
        </ul>
      )
      }
    }


    render() {
      let image = this.props.user.providerData ? this.props.user.providerData[0].photoURL : 'http://placehold.it/100x100'
      return(
          <main>
            <Header firebase={this.props.firebase} />
            <div>
              <div id="pic-div">
                <div id="prof-pic">
                  <img src={image} alt="Profile Picture" id="profPic" />
                </div>
              </div>
              <div className="trips">
                <div id="myTrips">
                  <div id="myTripsHeader">
                    <h2>My Trips</h2>
                  </div>
                  {this._renderTrips()}
                </div>
              </div>
              </div>
          </main>
        );
    }
}

export default Profile;
