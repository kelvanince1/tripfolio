// Modules
import React, {Component} from 'react';
import { Link } from 'react-router';

// Components

// Styles and images

class Profile extends Component {
  render() {
    return(
      <main className="container">
        <div className="row">
          <div className="col-md-6">
            <div id="profileInfo">
              <img src={this.props.user.photoURL} alt="Profile Picture" />
              <h3>{this.props.user.email}</h3>
              <p>User description</p>
            </div>
            <Link to="/newTrip">New Trip</Link>
          </div>
          <div className="col-md-6">
            <div id="myTrips">
              <ul>
                <li><a href="#">Name of destination</a></li>
                <li><a href="#">My trip to Madrid</a></li>
              </ul>
            </div>
          </div> {/* Close col-md-6 div */}
        </div> {/* Close row div */}
      </main>
    );
  }
}

export default Profile;
