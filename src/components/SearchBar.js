import React, {Component} from 'react';
import _ from 'lodash';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();

    this.props._handleSubmit(this.refs.search.value);
  }

  render() {
    return(
      <form onSubmit={this._handleSubmit}>
        <input id="newTripSubmit" type="text" ref="search" placeholder="Enter City Here"/>
        <input className="largeButton" type="submit" value="Go!" />
      </form>
    );
  }
}

export default SearchBar;
