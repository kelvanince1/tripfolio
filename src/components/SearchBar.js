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
        <input type="text" ref="search" />
        <input type="submit" value="Go!" />
      </form>
    );
  }
}

export default SearchBar;
