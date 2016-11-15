import React, {Component} from 'react';
import { Link } from 'react-router';

class Header extends Component {

  render() {
    return(
      <div id="header">
        <ul>
          <li>
            <img src="https://lh3.googleusercontent.com/Xi0W8qJuZorSXoHlgJJBeQ23H_t-7DgK0cAA-xNaFinDPrqbQy3hzMnfuOWH480a9ugW=s85" />
          </li>

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
