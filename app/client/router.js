import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/App';
import CreationForm from './components/creationForm/CreationForm';
import LevelUpForm from './components/creationForm/LevelUpForm';
import Battle from './components/battle/Battle.js';

import StartMap from './components/startMap/Map.js';
import Map from './components/map/Map.js';
import Auth from './components/authorization/Auth.js';
import Leaderboard from './components/creationForm/Leaderboard';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Auth}></IndexRoute>
        <Route path="/battle" component={Battle}></Route>
        <Route path="/creationform" component={CreationForm}></Route>
        <Route path="/startmap" component={StartMap}></Route>
        <Route path="/map" component={Map}></Route>
        <Route path="/levelup" component={LevelUpForm}></Route>
        <Route path="/leaderboard" component = {Leaderboard}></Route>
      </Route>
    </Router>
  </Provider>
);

export default router;