// Modules
import React, { Component } from 'react';
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
    this._handleSubmit = this._handleSubmit.bind(this);
  }


  componentDidMount(){
    this.props.route.firebase.auth().onAuthStateChanged(user => {
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
      return <LoginButton firebase={this.props.route.firebase}>
        Login
      </LoginButton>
    } else {
      return <LogoutButton firebase={this.props.route.firebase}>
        Logout
      </LogoutButton>
    }
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
        _handleSubmit: this._handleSubmit
      })
    }

    return (
      <div>
        <header className="container-fluid">
          <div className="row">
            <div id="logo">
              <IndexLink to="/">LOGO</IndexLink>
            </div>
            <div id="login">
              {this._sessionButton()}
            </div>
          </div>
        </header>
        {children}
      </div>
    );
  }
}

export default App;
