import React, {Component} from 'react';

class TravelPlanningPage extends Component {
  render() {
    return(
      <main>
        <h2>My trip to <span id="destinationName">NAME HERE</span></h2>
        <nav>
          <h3>Suggestions</h3>
          <a href="#">Food</a>
          <a href="#">Attractions</a>
          <a href="#">Hotels</a>
        </nav>
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
        <div id="myTiles">

        </div>
      </main>
    );
  }
}

export default TravelPlanningPage;
