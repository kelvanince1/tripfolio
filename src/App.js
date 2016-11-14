// Modules
import React, { Component } from 'react';
import _ from 'lodash';
import { Link, IndexLink, hashHistory } from 'react-router';

// Components
import Home from './components/Home';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

// Styles and images
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {},
      trips: {}
    }

    this._handleSubmit = this._handleSubmit.bind(this);
    this._loadUsersTrips = this._loadUsersTrips.bind(this);
  }

  componentDidMount(){
    let firebase = this.props.route.firebase;

    firebase.auth().onAuthStateChanged(user => {
      // If user is signed in...
      if (user) {
        // Save user's info to state
        this.setState({ user })

        // Redirect to profile page
        hashHistory.push('/profile');

        // Load logged in users trips to display on profile page
        this._loadUsersTrips(user);

      // Otherwise, if no user is signed in.
      } else {
        // Remove user and their trips from the state
        this.setState({user: {}, trips: {}})
      }
    });
  }

  _loadUsersTrips(user) {
    let uid = user.uid;
    let firebase = this.props.route.firebase;

    firebase.database().ref(`/tripbook/${uid}`).once('value').then(snapshot => {
      let trips = snapshot.val();

      this.setState({ trips });
    });
  }

  _handleSubmit(destination) {
    this.setState({ destination });
  }

  render(){
    let children = null;
    if(this.props.children){
      children = React.cloneElement(this.props.children, {
        firebase: this.props.route.firebase,
        user: this.state.user,
        destination: this.state.destination,
        _handleSubmit: this._handleSubmit,
        trips: this.state.trips
      })
    }

  return (
    <div>
     {children}
    </div>
    );
  }
}

export default App;
