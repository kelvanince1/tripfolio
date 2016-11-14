// Modules
import React, {Component} from 'react';
import _ from 'lodash';

// Components

// Styles and Images

class SuggestionBox extends Component {
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
