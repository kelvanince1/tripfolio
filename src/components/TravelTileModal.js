import React, { Component } from 'react';

class TravelTileModal extends Component {
  constructor(props) {
    super(props);

    this._addTile = this._addTile.bind(this);
    this._removeYelpListing = this._removeYelpListing.bind(this);
  }

  _addTile() {
    let firebase = this.props.firebase;
    let uid = this.props.user.uid;
    let tripId = this.props.tripId;
    let destination = this.props.destination;
    let tile = this.props.selectedTile;
    let category = this.props.category;

    firebase.database().ref(`/tripbook/${uid}/${tripId}/places`).push({
      tile,
      category
    }).then(() => {
      // Delete the original yelp listing from results so that it does not render on the page

      this._removeYelpListing(this.props.selectedTileIndex);
    })
  }

  _removeYelpListing(index) {
    this.props._removeYelpListing(index);
  }

  render() {
    let name, image;

    if(this.props.selectedTile) {
      name = this.props.selectedTile.name;
      image = this.props.selectedTile["image_url"];
    } else {
      name = "Placeholder Title";
      image = "#";
    }

    return(
      <div>
        <div id="modalBackground" className={this.props.className} onClick={this.props._closeModal}>
          <div id="modalContainer">
            <div id="modalHeader">
              <span id="closeModal" onClick={this.props._closeModal}>x</span>
            </div>
            <div id="modalContent">
              <h4>{name}</h4>
              <img src={image} />
            </div>
            <div id="modalFooter">
              <button onClick={this._addTile}>Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TravelTileModal;
