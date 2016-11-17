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

      this._deleteTrip = this._deleteTrip.bind(this);
      this._renderTrips = this._renderTrips.bind(this);
    }

    _deleteTrip(tripId) {
      let uid = this.props.user.uid;

      this.props.firebase.database().ref(`/tripbook/${uid}/${tripId}`).remove();
    }

    _renderTrips() {
      if (_.isEmpty(this.props.trips)) {
        return <NewTripModal />
      }
      else {
        return(
        <ul>
          {_.map(this.props.trips, (trip, tripId) => {
            let destination = trip.destination;
            return (
              <li key={tripId} data-tripId={tripId}>
                My trip to {destination}
                <Link to={`/completed/${this.props.user.uid}/${tripId}/${trip.destination}`}>
                  View
                </Link>
                <Link to={`/planner/${this.props.user.uid}/${tripId}/${trip.destination}`}>
                  Edit
                </Link>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  this._deleteTrip(tripId)
                }}>Delete</a>
              </li>
            )
          })}
        </ul>
      )
      }
    }


    render() {
      return(
          <main className="container">
            <Header firebase={this.props.firebase} />
            <div className="row">
              <div className="profile">
                <div id="profileInfo">
                  <img src={"www.fakeURL.com"} alt="Profile Picture" id="profPic" />
                </div>
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
