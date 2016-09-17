import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/App';
import CreationForm from './components/CreationForm';
import Battle from './components/battle/Battle.js';
import Map from './components/map/Map.js';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={CreationForm}></IndexRoute>
        <Route path="/test" component={Battle}></Route>
        <Route path="/map" component={Map}></Route>
      </Route>
    </Router>
  </Provider>
);

export default router;