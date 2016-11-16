// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import firebase from './utils/firebase';

// Components
import requireAuth from './utils/requireAuth';
import App from './App';
import Home from './components/Home';
import Profile from './components/Profile';
import TripPlanningPage from './components/TripPlanningPage';
import NewTripModal from './components/NewTripModal';



import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App} firebase={firebase}>
      <IndexRoute component={Home}/>
<<<<<<< HEAD
      <Route path='/profile' component={Profile}/>
      <Route path='/planner/:tripId' component={TripPlanningPage} onEnter={requireAuth}/>
=======
      <Route path='/profile' component={Profile} onEnter={requireAuth}/>
      <Route path='/planner/:tripId/:destination' component={TripPlanningPage} onEnter={requireAuth}/>
>>>>>>> 08ca4bfb707d3dc7930b14c2993451703a30f3ae
      <Route path='/newTrip' component={NewTripModal} onEnter={requireAuth}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
