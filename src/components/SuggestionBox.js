// Modules
import React, {Component} from 'react';
import _ from 'lodash';

// Components

// Styles and Images

class SuggestionBox extends Component {
  // The .child string will be altered when a variable is defined for the new data which will be added to a users new trip.
  // _handleClick() {
  //   var newTrip = this.refs.destination;
  //   firebase.database().ref().child(this.props.destination).push().key.then(() => {
  //     this.refs.destination.value = "";
  //     this.refs.destination.focus();
  //   })
  // }

  render() {
    return(
      <div className="container">
        <div className="row" id="suggestionContainer">
          {_.map(this.props.results, (business, index) => {
            let image = business["image_url"];
            let name = business.name;
            let url = business.url;

            return <div className="suggestionTile" key={index}><img src={image} /><h6>{name}</h6></div>
          })}
        </div>
      </div>
    );
  }
}

export default SuggestionBox;
