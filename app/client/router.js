import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Test from './components/Test';
import Test2 from './components/Test2';

import Battle from './components/battle/Battle.js';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Test}>
        <IndexRoute component={Battle}></IndexRoute>
        <Route path="/test" component={Test2}></Route>
      </Route>
    </Router>
  </Provider>
);

export default router;