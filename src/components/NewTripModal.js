// Modules
import React, { Component } from 'react';
import { Link } from 'react-router';
import yelp from '../utils/yelp';

// Components
const yelpCallback = (error, response, body) => {
  console.log('yelpCallback');
  console.log('error', error);
  console.log('response');
}

yelp({}, yelpCallback)

// Styles and images

class NewTripModal extends Component {
<<<<<<< HEAD
  _handleClick() {
    console.log(yelp);
  }
  render() {
    return(
      <main>
        <form>
          <h4 onClick={this._handleClick.bind(this)}>Where do you want to go?</h4>
          <input type="text" />
=======
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();

    // Grab user info
    let destination = this.refs.destination.value;

    // Pass the data up the chain to paren't state
    this.props._handleSubmit(destination);
  }

  render() {
    return(
      <main>
        <form onSubmit={this._handleSubmit}>
          <h4>Where do you want to go?</h4>
          <input type="text" ref="destination" />
>>>>>>> 7db72dfca0af7fd4c243df6bf2d08207bd291673
          <Link to="/planner">Get Started!</Link>
        </form>
      </main>
    );
  }
}

export default NewTripModal;
