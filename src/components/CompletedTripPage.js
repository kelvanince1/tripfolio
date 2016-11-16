import React, {Component} from 'react';

class CompletedTripPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ownerDispName: ''
    }

    this._test = this._test.bind(this);
    this._renderMyTrip = this._renderMyTrip.bind(this);
  }

  _test() {
    let user = this.props.user;
    let uid = this.prop.user.uid;
    let displayName = this.props.user.providerData[0].displayName;

  }

  _renderMyTrip() {
    return (
      <div className="pageHeader">
        <h2>My trip to DESTINATION</h2>
        <nav>
          {/* STRETCH: switch to make your trip public or private */}
          <button>Edit</button>
          <input type="text" placeholder="Search your trips" ref="searchBar" />
        </nav>
      </div>
    )
  }

  _checkUser() {
    let currentUser = this.props.user.uid;

    // The 'owner' of the trip (aka the uid of the person who created it) will need to be passed when the component is rendered
    let creator; // = this.props.owner;

    if(true) {
      return this._renderMyTrip();
    } /* Once functionality is added to see other people's trips, think of how to render

     else {
      this._renderTrip();
    } */
  }

  render() {
    return(
      <main>
        {this._checkUser()}
        <div id="eat"></div>
        <div id="drink"></div>
        <div id="see"></div>
        <div id="sleep"></div>
        <button onClick={this._test}>See user</button>
      </main>
    );
  }
}

export default CompletedTripPage;
