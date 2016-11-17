// Modules
import React, {Component} from 'react';
import _ from 'lodash';

// Components
import SearchBar from './SearchBar';

class Destinations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    }

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(query) {
    let ref= this.props.firebase.database().ref('/tripbook');

    ref.on('value', snapshot => {
      let list = snapshot.val();
      var array = [];
      var arrayOfObjs = [];
      let userList;

      _.map(list, (tripsByUser, uid) => {
        array.push(tripsByUser);
      })

      array.forEach(tripObj => {
        for(var key in tripObj) {
          arrayOfObjs.push(tripObj[key]);
        }
      });

      let results = arrayOfObjs.filter(tripObj => {
        return tripObj.destination === query;
      });

      this.setState({ results });
    });
  }

  render() {
    return(
      <main>
        <SearchBar _handleSubmit={this._handleSubmit} />
        <div id="searchResults">
          <ul>
            {_.map(this.state.results, (result, index) => {
              return <li key={index}>{result.username}'s trip to {result.destination}</li>
            })}
          </ul>
        </div>
      </main>
    );
  }
}

export default Destinations;
