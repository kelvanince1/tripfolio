// Modules
import React, {Component} from 'react';
import { Link } from 'react-router';

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
            </div>
            <h2 id="where">Where would you like to go?</h2>
            <h2 id="linkTrip"><Link to="/newTrip" id="newTripId">New Trip</Link></h2>
          </div>
          <div className="trips">
            <div id="myTrips">
              <h2>My Trips</h2>
              <ul>
                <li><Link to="/planner">Name of destination</Link></li>
                <li><Link to="/planner">My trip to Madrid</Link></li>
              </ul>
            </div>
          </div> {/* Close col-md-6 div */}
        </div> {/* Close row div */}
      </main>
    );
  }
}

export default Profile;
