import React, { Component } from 'react';


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
      <div className="dropdown">
        <div className="dropdown-toggle" data-toggle="dropdown">
          <img className="profilePicture" src="#" alt="" />
          <p className="username">clrksanford</p>
        </div>
        <ul className="dropdown-menu">
          <li><a href="#" onClick={this._handleLogout}>Logout</a></li>
          <li><a id="showProfile" href="#">My Profile</a></li>
        </ul>
      </div>
    )
  }
}
