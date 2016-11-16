// Modules
import React, {Component} from 'react';
import _ from 'lodash';
// Components

// Styles and images

import LoginButton from './LoginButton';


class Home extends Component {
  _renderContent() {
    if (_.isEmpty(this.props.user)) {
      return <div className="container-inner">
        <LoginButton firebase={this.props.firebase}>Login</LoginButton>
      </div>
    } else {
      return <div>
        Welcome back Joseph
      </div>
    }
  }

  render() {
    return(
    <div>
      <div id="home-logo">
        <img src="/images/logo.png" />
        <h1>TripFolio</h1>
      </div>
      <main id="main" className="container-fluid">
        {this._renderContent()}
      </main>
    </div>
    );
  }
}

export default Home;
