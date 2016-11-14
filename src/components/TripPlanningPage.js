// Modules
import React, {Component} from 'react';
import axios from 'axios';

// Components
import SuggestionBox from './SuggestionBox';

// Styles and images

class TravelPlanningPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    }
  }

  componentDidMount() {
    let destination = this.props.destination;
    let link = `https://thawing-cliffs-39852.herokuapp.com/${destination}`;

    axios.get(link)
      .then((response) => {
        let results = response.data.businesses;

        this.setState({ results });
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
        <SuggestionBox results={this.state.results} />
        <div id="myTiles">

        </div>
      </main>
    );
  }
}

export default TravelPlanningPage;
