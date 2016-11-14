// Modules
import React, {Component} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

// Components
import LogoutButton from './LogoutButton';
// Styles and images

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trips: {}
    };
  }

  componentDidMount() {
    let firebase = this.props.firebase;
    let uid = this.props.user.uid;

    firebase.database().ref(`/tripbook/${uid}`).once('value').then(snapshot => {
      let trips = snapshot.val();

      this.setState({ trips });
    });
  }

  render() {
    return(
      <main className="container">
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
                {_.map(this.state.trips, (trip, tripId) => {
                  let destination = _.capitalize(trip.destination);

                  return <li key={tripId} data-tripId={tripId}>My trip to {destination}</li>
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
