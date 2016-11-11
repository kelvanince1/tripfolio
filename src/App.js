import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          LOGO
          <a href="#">Login</a>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default App;
