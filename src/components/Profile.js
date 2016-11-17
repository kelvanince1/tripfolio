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
      let image = this.props.user.providerData ? this.props.user.providerData[0].photoURL : 'http://placehold.it/100x100'
      return(
        <div id="prof-background">
          <main>
            <Header firebase={this.props.firebase} />
            <div>
              <div id="pic-div">
                <div id="prof-pic">
                  <img src={image} alt="Profile Picture" id="profPic" />
                </div>
              </div>
              <div>
                <NewTripModal />
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
        </div>
        );
    }
}

export default Profile;
