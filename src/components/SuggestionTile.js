import React, { Component } from 'react';

class SuggestionTile extends Component {
  constructor(props) {
    super(props);

    this._showModal = this._showModal.bind(this);
  }

  _showModal() {
    this.props._showModal(this.props.index);
  }

  render() {
    return(
      <div className="suggestionTile" key={this.props.index} onClick={this._showModal}><img src={this.props.image} alt="This will be filled by Yelp API" /><h6>{this.props.name}</h6></div>
    );
  }
}

export default SuggestionTile;
