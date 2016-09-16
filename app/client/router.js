import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Test2 from './components/Test2';
import App from './components/App';
import CreationForm from './components/CreationForm';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={CreationForm}></IndexRoute>
        <Route path="/test" component={Test2}></Route>
      </Route>
    </Router>
  </Provider>
);

export default router;