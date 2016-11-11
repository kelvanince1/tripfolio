// Modules
import React, { Component } from 'react';
import firebase from './utils/firebase';
import _ from 'lodash';
import { Link, IndexLink } from 'react-router';

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
      user: {}
    }

    this._sessionButton = this._sessionButton.bind(this);
  }


  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
  if (user) {
    this.setState({ user })
    // User is signed in.
  } else {
    this.setState({user: {} })
    // No user is signed in.
  }
  });
}


_sessionButton() {
    if (_.isEmpty(this.state.user)) {
      return <LoginButton firebase={firebase}>
        Login
      </LoginButton>
    } else {
      return <LogoutButton firebase={firebase}>
        Logout
      </LogoutButton>
    }
  }

  render(){
    return (
      <div>
        <header>
          LOGO
          {this._sessionButton()}
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default App;
