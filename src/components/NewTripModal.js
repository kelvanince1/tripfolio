// Modules
import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import _ from 'lodash';

// Components
import Header from './Header';

// Styles and images

class NewTripModal extends Component {
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();

    // Grab user info
    let destination = _.startCase(this.refs.destination.value);

    let uid = this.props.user.uid;
    let username = this.props.user.providerData.displayName;

    var newPostKey = this.props.firebase.database().ref().child(uid).push().key;
    this.props.firebase.database().ref(`/tripbook/${uid}/${newPostKey}`).update({
      destination,
      uid,
      username,
      public: false
    });


    hashHistory.push(`/planner/${uid}/${newPostKey}/${destination}`);
    //
    // // Pass the data up the chain to parent state
    // this.props._handleSubmit(destination);
  }

  render() {
    let image = this.props.user.providerData ? this.props.user.providerData[0].photoURL : 'http://placehold.it/100x100'
    return(
      <div>
        <div id="completed-nav">
          <Header firebase={this.props.firebase} />
        </div>
        <div id="pic-div">
          <div id="prof-pic">
            <img src={image} alt="Your profile avatar" id="profPic" />
          </div>
        </div>
        {/* <Link to="/profile" id="profile-button" className="btn btn-default">My profile</Link> */}
        <form onSubmit={this._handleSubmit}>
          <h2>Where Do You Want To Go?</h2>
          <br/>
          <input type="text" ref="destination" id="newTripSubmit" placeholder="Enter City Here"/>
          <input className="largeButton" type="submit" value="Get Started!"/>
        </form>
      </div>
    );
  }
}

export default NewTripModal;
