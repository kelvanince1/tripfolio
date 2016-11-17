// Modules
import React, {Component} from 'react';
import _ from 'lodash';
import {hashHistory} from 'react-router';
// Components

// Styles and images
import '../App.css';
import LoginButton from './LoginButton';


class Home extends Component {
  _renderContent() {
    if (_.isEmpty(this.props.user)) {
      return <div className="container-inner">
        <LoginButton firebase={this.props.firebase}>Login</LoginButton>
      </div>
      hashHistory.push('/profile')
      console.log('logged in');
    } else {
      return <div>I have a user</div>
      console.log('Check your code fuckface!');
    }
  }

  render() {
    return(
    <div>
      <div id="home-banner">
        <div id="home-logo">
          <h1>Your Next Trip Starts Here</h1>
          <img id="logo-pic" src="/images/logo 2.png"/>
        </div>
        <div>
          {this._renderContent()}
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
