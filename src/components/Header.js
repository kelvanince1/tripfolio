import React, {Component} from 'react';
import { Link } from 'react-router';


import LogoutButton from './LogoutButton'

class Header extends Component {

  render() {
    return(
      <div>
        <div id="nav-pills">
        <ul className="nav nav-pills">
          <li role="presentation">
          <button className="btn btn-default"><newTrips /><Link to="newTrip">My Trips</Link></button>
          </li>
          <li role="presentation">
            <button className="btn btn-default"><container />
            <Link to="SuggestionBox">Destinations</Link></button>
          </li>
          <li role="presentation">
            <LogoutButton firebase={this.props.firebase} />
          </li>
        </ul>
        </div>
        <div id="logo-div">
          <img id="logo" src="/images/logo 2.png" />
        </div>
      </div>

    )
  }
}

export default Header;
