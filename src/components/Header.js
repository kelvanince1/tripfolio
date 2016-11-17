import React, {Component} from 'react';
import { Link } from 'react-router';


import LogoutButton from './LogoutButton'

class Header extends Component {

  render() {
    return(
      <div id="header">
        <ul>
          <div id="logo">
            <Link to="profile"><img id="logo" src="/images/logo 2.png" /></Link>
          </div>

          <li>
          <button><newTrips /><Link to="newTrip">New Trip</Link></button>
          </li>

          <li>
          <button><container />
          <Link to="SuggestionBox">Destinations</Link></button>
          </li>

          <li>
            <LogoutButton firebase={this.props.firebase} />
          </li>
        </ul>
      </div>

    )
  }
}

export default Header;
