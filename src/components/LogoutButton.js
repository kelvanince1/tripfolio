import React, { Component } from 'react';
import {Link} from 'react-router';

export default class LogoutButton extends Component{
  constructor(props){
    super(props);
    this._handleLogout = this._handleLogout.bind(this)
  }

_handleLogout(e){
  e.preventDefault()
  let provider = new
  this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signOut();
}

  render(){
    return(
      <div>
        <Link to="/profile" className="btn btn-default">See my profile</Link>
        <a href="#" onClick={this._handleLogout} className="btn btn-default">Logout</a>
      </div>
    )
  }
}
