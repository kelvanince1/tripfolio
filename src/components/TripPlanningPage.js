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

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    let firebase = this.props.firebase;
    let uid = this.props.user.uid;
    let destination = this.props.destination;

    firebase.database().ref(`/tripbook/${uid}`).push({
      destination: destination,
      places: [
        {
          name: 'Puerta del Sol',
          image: 'http://fakeurl.com'
        },
        {
          name: 'Museo del Prado',
          image: 'http://fakeurl.com'
        }
      ]
    }).then(() => {
      console.log('success');
    })
  }

  componentDidMount() {
    let destination = this.props.destination;

    // By default, load results for tourist attractions
    let link = `https://thawing-cliffs-39852.herokuapp.com/${destination}/tourist%20attractions`;

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
        <button onClick={this._handleClick}>Save</button>
      </main>
    );
  }
}

export default TravelPlanningPage;
