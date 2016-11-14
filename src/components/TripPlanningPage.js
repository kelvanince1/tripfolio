// Modules
import React, {Component} from 'react';
import axios from 'axios';

// Components
import SuggestionBox from './SuggestionBox';

// Styles and images

class TravelPlanningPage extends Component {
  componentDidMount() {
    let destination = this.props.destination;
    console.log(destination);
    axios.get(`https://thawing-cliffs-39852.herokuapp.com/${destination}`)
      .then(function(response) {
        console.log(response);
      });
  }

  render() {
    return(
      <main>
        <h2>My trip to <span id="destinationName">{this.props.destination}</span></h2>
        <nav>
          <h3>Suggestions</h3>
          <a href="#">Food</a>
          <a href="#">Attractions</a>
          <a href="#">Hotels</a>
        </nav>
        <SuggestionBox />
        <div id="myTiles">

        </div>
      </main>
    );
  }
}

export default TravelPlanningPage;
