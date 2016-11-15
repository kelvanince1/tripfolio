import React, { Component } from 'react';

export default class LogoutButton extends Component{
  constructor(props){
    super(props);
    this._handleLogout = this._handleLogout.bind(this)
  }

_handleLogout(replaceState){
  let provider = new
  this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signOut();
  replaceState('/');
}

  render(){
    return(
      <div>
        <a href="#" onClick={this._handleLogout} id="logout-button" className="btn btn-default">Logout</a>
      </div>
    )
  }
}
