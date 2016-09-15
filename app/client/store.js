import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/rootReducer';

import hero from './data/hero';

const defaultState = {
  hero
}

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

// if(module.hot) {
//   module.hot.accept('./reducers', () => {
//     const nextRootReducer = require('./reducers/rootReducer');
//     store.replaceReducer(nextRootReducer);
//   })
// }

export default store;