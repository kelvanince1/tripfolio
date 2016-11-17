import React, { Component } from 'react';

class AlertModal extends Component {







render() {
  let name, image, snippet_text;

  if(this.props.selectedTile) {
    name = this.props.selectedTile.name;
    image = this.props.selectedTile["image_url"];
    snippet_text = this.props.selectedTile.snippet_text;
  } else {
    name = "Placeholder Title";
    image = "#";
    snippet_text= "snippet_text";
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
            <p>{snippet_text}</p>
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

export default AlertModal;
