import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

import hero from './data/hero';
import enemy from './data/enemy';
import game from './data/game'
import startMap from './data/startMap'
import map from './data/map'

const defaultState = {
  hero,
  enemy,
  game,
  map,
  startMap
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));
export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('./reducers/rootReducer.js', () => {
    const nextRootReducer = require('./reducers/rootReducer').default;
    store.replaceReducer(nextRootReducer);
  })
}

export default store;