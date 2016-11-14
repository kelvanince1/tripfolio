// Modules
import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import firebase from 'firebase';

// Components

// Styles and images

class NewTripModal extends Component {
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
  }




  _handleSubmit(e) {
    e.preventDefault();

    // Grab user info
    let destination = this.refs.destination.value;

    hashHistory.push('/planner');

    // The .child string will be altered when a variable is defined for the new data which will be added to a users new trip.
    var newTrip = this.refs.destination;
    firebase.database().ref().child(this.props.destination).push().key.then(() => {
      this.refs.destination.value = "";
      this.refs.destination.focus();
    })

    // Pass the data up the chain to parent state
    this.props._handleSubmit(destination);
  }

  render() {
    return(
      <main>
        <form onSubmit={this._handleSubmit}>
          <h4>Where do you want to go?</h4>
          <input type="text" ref="destination" />
          <input type="submit" value="Get Started!"/>
        </form>
      </main>
    );
  }
}

export default NewTripModal;
