import React, {Component} from 'react';
import { Link } from 'react-router';

// Components
import LogoutButton from './LogoutButton'

// Styles and images
import logo from "../../public/images/logo-2.png";

class Header extends Component {

  render() {
    return(
      <div>
        <div id="nav-pills">
        <ul className="nav nav-pills">
          {/* <li role="presentation">
          <button id="nav-buttons" className="btn btn-default"><newTrips /><Link to="newTrip">My Trips</Link></button>
          </li> */}
          <li role="presentation">
            <button id="nav-buttons" className="btn btn-default">
            <Link to="/profile">My Profile</Link></button>
          </li>
          <li role="presentation">
            <button id="nav-buttons" className="btn btn-default">
            <Link to="/destinations">Destinations</Link></button>
          </li>
          <li role="presentation">
            <LogoutButton firebase={this.props.firebase}/>
          </li>
        </ul>
        </div>
        <div id="logo-div">
          <Link to="/profile"><img id="logo" src={logo} alt="Website logo showing yellow folder with Tripfolio in blue font"/></Link>
        </div>
      </div>

    )
  }
}

export default Header;
