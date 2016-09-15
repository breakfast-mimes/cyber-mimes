import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Test from './components/Test';
import Test2 from './components/Test2';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Test}>
        <IndexRoute component={Test2}></IndexRoute>
        <Route path="/test" component={Test}></Route>
      </Route>
    </Router>
  </Provider>
);

export default router;