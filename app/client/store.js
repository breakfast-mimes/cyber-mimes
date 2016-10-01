import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import axios from 'axios';
import { putCharacter } from './actions/dbActions';
import { init } from './actions/dbActions';

import rootReducer from './reducers/rootReducer';

import hero from './data/hero';
import enemy from './data/enemy';
import game from './data/game';
import map from './data/map';
import startMap from './data/startMap';
import battle from './data/battle';



const defaultState = {
  hero,
  enemy,
  game,
  map,
  startMap,
  battle
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));
store.dispatch(init());
export const history = syncHistoryWithStore(browserHistory, store);


let currentState;
store.subscribe(() => {
  let logged = store.getState().game.logged;
  let location = store.getState().routing.locationBeforeTransitions.pathname;
  let previousState = currentState;
  currentState = JSON.stringify(store.getState().hero);
  if(currentState !== previousState && logged && location !== '/' && location !== '/creationform') {
    console.log("store update", location);
    console.log(currentState);
    console.log(previousState)
    store.dispatch(putCharacter(JSON.parse(currentState)));
  } else {
    console.log("hero state didnt change");
  }
});

if(module.hot) {
  module.hot.accept('./reducers/rootReducer.js', () => {
    const nextRootReducer = require('./reducers/rootReducer').default;
    store.replaceReducer(nextRootReducer);
  })
}


export default store;