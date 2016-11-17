import React, {Component} from 'react';
import _ from 'lodash';

class SearchTest extends Component {
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();

    let searchTerm = this.refs.search.value;

    let ref= this.props.route.firebase.database().ref('/tripbook');

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
        return tripObj.destination === searchTerm;
      });

      console.log(results);
    });
  }

  render() {
    return(
      <form onSubmit={this._handleSubmit}>
        <input type="text" ref="search" />
        <input type="submit" value="Go!" />
      </form>
    );
  }
}

export default SearchTest;
