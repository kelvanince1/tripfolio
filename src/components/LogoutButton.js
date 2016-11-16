import React, { Component } from 'react';
import { hashHistory } from 'react-router';

export default class LogoutButton extends Component{
  constructor(props){
    super(props);
    this._handleLogout = this._handleLogout.bind(this)
  }

  _handleLogout(e){
    e.preventDefault()
    this.props.firebase.auth().signOut().then(function() {
      console.log('Signed Out');
      hashHistory.push('/')
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }

  render(){
    return(
      <div>
        <a href="#" onClick={this._handleLogout} id="logout-button" className="btn btn-default">Logout from compnent</a>
      </div>
    )
  }
}
