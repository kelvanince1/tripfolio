import React, {Component} from 'react';
import { Link } from 'react-router';

class Header extends Component {

  render() {
    return(
      <nav>
        <ul id="header">
          <li img src="https://lh3.googleusercontent.com/Xi0W8qJuZorSXoHlgJJBeQ23H_t-7DgK0cAA-xNaFinDPrqbQy3hzMnfuOWH480a9ugW=s85"></li> // A wee logo for now
          <li>My Trips</li> // Link to my trips page once built.
          <li><Link to="SuggestionBox">Suggestions</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Header;
