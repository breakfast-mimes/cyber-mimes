import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/rootReducer';

import hero from './data/hero';
import enemy from './data/enemy';
import game from './data/game'
import map from './data/map'

const defaultState = {
  hero,
  enemy,
  game,
  map
}

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('./reducers/rootReducer.js', () => {
    const nextRootReducer = require('./reducers/rootReducer').default;
    store.replaceReducer(nextRootReducer);
  })
}

export default store;