// Modules
import React, {Component} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

// Components
import SuggestionTile from './SuggestionTile';

// Styles and Images

class SuggestionBox extends Component {
  constructor(props) {
    super(props);

    this._showModal = this._showModal.bind(this);
  }

  _showModal(index) {
    this.props._showModal(index)
  }

  render() {
    return(
      <div className="container">
        <Link to="/profile" id="profile-button" className="btn btn-default">See my profile</Link>
        <div className="row" id="suggestionContainer">
          <h3>Suggestions</h3>
          {_.map(this.props.results, (business, index) => {
            let image = business["image_url"];
            let name = business.name;
            let url = business.url;

            return <SuggestionTile key={index} index={index} image={image} name={name} _showModal={this._showModal} />
          })}
        </div>
      </div>
    );
  }
}

export default SuggestionBox;
