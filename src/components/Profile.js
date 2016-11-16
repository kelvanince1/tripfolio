// Modules
import React, {Component} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

// Components
import LogoutButton from './LogoutButton';
import NewTripModal from './NewTripModal';
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
            return <li key={tripId} data-tripId={tripId}><Link to={`/planner/${tripId}`}>My trip to {destination}</Link></li>
          })}
        </ul>
      )
      }
    }


    render() {
      return(
          <main className="container">
            <div className="row">
              <div className="profile">
                <div id="profileInfo">
                  <img src={this.props.user.providerData[0].photoURL} alt="Profile Picture" id="profPic" />
                </div>
                <h2 id="where">Where would you like to go?</h2>
                <h2 id="linkTrip"><Link to="/newTrip" id="newTripId">New Trip</Link></h2>
              </div>
              <div className="trips">
                <div id="myTrips">
                  <h2>My Trips</h2>
                  {this._renderTrips()}
                </div>
              </div>
              </div>
            </main>
        );
    }
}

export default Profile;
