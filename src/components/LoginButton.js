import React, { Component } from 'react';
import { Link } from 'react-router';


export default class LoginButton extends Component{
  constructor(props){
    super(props);
    this._handleClick = this._handleClick.bind(this)
  }

_handleClick(e){
  e.preventDefault()
  let provider = new
  this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signInWithPopup(provider);

}

  render(){
    return(
      <div>
        <button onClick={this._handleClick} className="btn btn-default">
        <Link to="profile">{this.props.children}</Link></button>
      </div>
    )
  }
}
