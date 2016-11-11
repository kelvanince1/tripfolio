import React, {Component} from 'react';

class Profile extends Component {
  render() {
    return(
      <main>
        <div className="column">
          <div id="profileInfo">
            <img src="#" alt="Profile Picture" />
            <h3>username</h3>
            <p>User description</p>
          </div>
          <a href="#">New Trip</a>
        </div>
        <div className="column">
          <div id="myTrips">
            <ul>
              <li><a href="#">Name of destination</a></li>
              <li><a href="#">My trip to Madrid</a></li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
