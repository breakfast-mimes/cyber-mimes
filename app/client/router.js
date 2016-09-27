import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/App';
import CreationForm from './components/creationForm/CreationForm';
import LevelUpForm from './components/creationForm/LevelUpForm';
import Battle from './components/battle/Battle.js';
import BuildBattle from './components/buildBattle/Battle.js';

import StartMap from './components/startMap/Map.js';
import Map from './components/map/Map.js';
import signin from './components/authorization/signin.js';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={CreationForm}></IndexRoute>
        <Route path="/battle" component={Battle}></Route>
        <Route path="/buildBattle" component={BuildBattle}></Route>
        <Route path="/startMap" component={StartMap}></Route>
        <Route path="/map" component={Map}></Route>
        <Route path="/levelup" component={LevelUpForm}></Route>
      </Route>
      <Route path="/signin" component={signin}>
      </Route>
    </Router>
  </Provider>
);

export default router;