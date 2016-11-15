import React, { Component } from 'react';

class TravelTileModal extends Component {
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
              <button onClick={this._logTile}>Show tile</button>
              <button>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TravelTileModal;
