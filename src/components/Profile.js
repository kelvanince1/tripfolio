// Modules
import React, {Component} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

// Components
import LogoutButton from './LogoutButton';
// Styles and images

class Profile extends Component {

    // if (_.isEmpty(this.props.user)) {
    //   return
    //   <form>
    //     <input type="submit" value="Where would you like to visit" />
    //   </form>
    // }
    // else {
    //   return('.container')
    // }
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
                      {_.map(this.props.trips, (trip, tripId) => {
                        let destination = _.capitalize(trip.destination);
                        return <li key={tripId} data-tripId={tripId}><Link to={`/planner/${tripId}`}>My trip to {destination}</Link></li>
                      })}
                    </ul>
                </div>
              </div>
              </div>
            </main>
        );
    }
}

export default Profile;
