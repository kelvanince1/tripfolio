import React, { Component } from 'react';

class UsersTile extends Component {
  constructor(props) {
    super(props);

    this._showModal = this._showModal.bind(this);
    this._deleteTile = this._deleteTile.bind(this);
  }

  _showModal() {
    this.props._showModal(this.props.index);
  }

  _deleteTile() {
    this.props._deleteTile(this.props.index);
  }

  render() {
    return(
      <div className="suggestionTile" key={this.props.index} onClick={this._showModal}>
      <span id="deleteTile" onClick={this._deleteTile}>x</span><img src={this.props.image} />
      <h6>{this.props.name}</h6></div>
    );
  }
}

export default UsersTile;
