import React, {Component} from 'react';

class SuggestionBox extends Component {
  render() {
    return(
      <div id="suggestionContainer">
        <div className="suggestionTile">
          <h4>Random Restaurant</h4>
          <p>API info will populate here</p>
        </div>
        <div className="suggestionTile">
          <h4>Random Restaurant 2</h4>
          <p>API info will populate here</p>
        </div>
      </div>
    );
  }
}

export default SuggestionBox;
