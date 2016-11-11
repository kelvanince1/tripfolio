// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

// Components
import App from './App';
import Home from './components/Home';
import Profile from './components/Profile';
import TripPlanningPage from './components/TripPlanningPage';

import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/planner' component={TripPlanningPage}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
