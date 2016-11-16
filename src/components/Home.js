// Modules
import React, {Component} from 'react';
import _ from 'lodash';
// Components

// Styles and images
import '../App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';


class Home extends Component {
  _renderContent() {
    if (_.isEmpty(this.props.user)) {
      return <div className="container-inner">
        <LoginButton firebase={this.props.firebase}>Login</LoginButton>
      </div>
    } else {
      return <div>I have a user</div>
    }
  }

  render() {
    return(
    <div>
      <div id="home-logo">
        <h1>Your Next Trip Starts Here</h1>
        <img src="/images/logo 2.png"/>
      </div>
      <div>
        {this._renderContent()}
      </div>
    </div>
    );
  }
}

export default Home;
