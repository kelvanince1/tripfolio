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
  _handleClick() {
    console.log(yelp);
  }
  render() {
    return(
      <main>
        <form>
          <h4 onClick={this._handleClick.bind(this)}>Where do you want to go?</h4>
          <input type="text" />
          <Link to="/planner">Get Started!</Link>
        </form>
      </main>
    );
  }
}

export default NewTripModal;
