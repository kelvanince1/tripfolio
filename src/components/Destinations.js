// Modules
import React, {Component} from 'react';
import _ from 'lodash';
import {Link} from 'react-router';

// Components
import SearchBar from './SearchBar';
import Header from './Header';

//Styles and images
import logo from "../../public/images/logo-2.png";

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

      _.map(list, (tripsByUser, uid) => {
        array.push(tripsByUser);
      })

      array.forEach(tripObj => {
        for(var key in tripObj) {
          let trip = tripObj[key];
          trip.tripId = key;

          arrayOfObjs.push(trip);
        }
      });

      let results = arrayOfObjs.filter(tripObj => {
        return tripObj.destination === query;
      });

      this.setState({ results });
    });
  }

  render() {
    let image = this.props.user.providerData ? this.props.user.providerData[0].photoURL : 'http://placehold.it/100x100'
    return(
      <main id="main">
        <div id="completed-nav">
          <Header firebase={this.props.firebase} />
        </div>
        <div id="logo-div">
          <Link to="/profile"><img id="logo" src={logo} alt="Website logo showing yellow folder with Tripfolio in blue font"/></Link>
        </div>
        <div id="prof-pic">
          <img src={image} alt="Your profile avatar" id="profPic" />
        </div>
        <h2>Search Users Trips</h2>
        <SearchBar _handleSubmit={this._handleSubmit} />
      <br/>
      <br/>
        <div>
          <ul id="searchResults">
            {_.map(this.state.results, (result, index) => {
              return (
                <li key={index}>
                  <Link to={`completed/${result.uid}/${result.tripId}/${result.destination}`}>
                    {result.username}s trip to {result.destination}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    );
  }
}

export default Destinations;
