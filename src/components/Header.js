import React, {Component} from 'react';
import { Link } from 'react-router';

class Header extends Component {

  render() {
    return(
      <div id="header">
        <ul>
          <div id="logo">
            <img id="logo" src="/images/logo.png" />
          </div>

          <li>
          <button><newTrips /><Link to="newTrip">My Trips</Link></button>
          </li>

          <li>
          <button><container />
          <Link to="SuggestionBox">Destinations</Link></button>
          </li>

          <li>
          <button><a href="#" onClick={this._handleLogout} id="logout-button" className="btn btn-default">Logout</a></button>
          </li>
        </ul>
      </div>

    )
  }
}

export default Header;
