import React, { Component } from 'react';
import { Link } from 'react-router';

class AlertModal extends Component {
  constructor(props) {
    super(props);
    this._deleteTrip = this._deleteTrip.bind(this);
  }

  _deleteTrip() {
    let uid = this.props.uid;
    let tripId = this.props.tripId;

    this.props.firebase.database().ref(`/tripbook/${uid}/${tripId}`).remove();
  }

  render() {
    return(
      <div>
        <div id="modalBackground" className={this.props.className} onClick={this.props._closeModal}>
          <div id="modalContainer">
            <div id="modalHeader">
              <span id="closeModal" onClick={this.props._closeModal}>x</span>
            </div>
            <div id="modalContent">
              <h4>{this.props.modalTitle}</h4>
              <p>{this.props.modalMessage}</p>
            </div>
            <div id="modalFooter">
            <Link to="/Profile" className={this.props.buttonClass} onClick={this._deleteTrip}>Delete</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlertModal;
