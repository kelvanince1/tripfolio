// Modules
import React, {Component} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

// Components
import LogoutButton from './LogoutButton';
// Styles and images

class Profile extends Component {
  render() {
    return(
      <main className="container">
        <Link to="/newTrip" id="trips-button" className="btn btn-default">My Trips</Link>
        <div id="logout">
          <LogoutButton firebase={this.props.route.firebase}>Logout</LogoutButton>
        </div>
        <div className="row">
          <div className="profile">
            <div id="profileInfo">
              <img src={this.props.user.providerData[0].photoURL} alt="Profile Picture" id="profPic" />
              <h3>{this.props.user.providerData[0].displayName}</h3>
              <p>User description</p>
            </div>
            <Link to="/newTrip">New Trip</Link>
          </div>
          <div className="trips">
            <div id="myTrips">
              <h2>My Trips</h2>
              <ul>
                {_.map(this.props.trips, (trip, tripId) => {
                  let destination = _.capitalize(trip.destination);

                  return <li key={tripId} data-tripId={tripId}><Link to={`/planner/${tripId}`}>My trip to {destination}</Link></li>
                })}
              </ul>
            </div>
          </div> {/* Close col-md-6 div */}
        </div> {/* Close row div */}
      </main>
    );
  }
}

export default Profile;
