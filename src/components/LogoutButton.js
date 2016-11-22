import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LogoutButton extends Component{
  constructor(props){
    super(props);
    this._handleLogout = this._handleLogout.bind(this)
  }

  _handleLogout(){
    this.props.firebase.auth().signOut();
  }

  render(){
    return(
      <div>
        <a href="#" onClick={this._handleLogout} id="nav-buttons" className="btn btn-default">Logout</a>
      </div>
    )
  }
}
