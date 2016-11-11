// Modules
import React, { Component } from 'react';
import { Link } from 'react-router';

// Components

// Styles and images

class NewTripModal extends Component {
  render() {
    return(
      <main>
        <form>
          <h4>Where do you want to go?</h4>
          <input type="text" />
          <Link to="/planner">Get Started!</Link>
        </form>
      </main>
    );
  }
}

export default NewTripModal;
