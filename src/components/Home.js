// Modules
import React, {Component} from 'react';

// Components
import TravelTileModal from './TravelTileModal';

// Styles and images

import LoginButton from './LoginButton';

class Home extends Component {
  render() {
    return(
      <main id="main" className="container-fluid">
       <div className="container-inner">
         <h1>Travel Planner</h1>
         <LoginButton firebase={this.props.firebase}>Login</LoginButton>
       </div>
     </main>
    );
  }
}

export default Home;
