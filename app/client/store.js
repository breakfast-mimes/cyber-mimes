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

window.localStorage.setItem('defaultHero', JSON.stringify(hero))

const defaultState = {
  hero: JSON.parse(window.localStorage.getItem('hero')) === null ? hero : JSON.parse(window.localStorage.getItem('hero')),
  map: JSON.parse(window.localStorage.getItem('map')) === null ? map : JSON.parse(window.localStorage.getItem('map')),
  enemy,
  game,
  startMap
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));
store.dispatch(init());
export const history = syncHistoryWithStore(browserHistory, store);

let defaultHero = JSON.stringify(hero);
let currentState;
store.subscribe(() => {
  let logged = store.getState().game.logged;
  let location = store.getState().routing.locationBeforeTransitions.pathname;
  let previousState = currentState;
  currentState = JSON.stringify(store.getState().hero);
  if(currentState !== defaultHero)
    window.localStorage.setItem('hero', currentState);
  if(currentState !== defaultHero && currentState !== previousState &&
     logged && location !== '/' && location !== '/creationform') {
    store.dispatch(putCharacter(JSON.parse(window.localStorage.getItem('hero'))));
  }
});

let currentMapState;
store.subscribe(() => {
  let logged = store.getState().game.logged;
  let location = store.getState().routing.locationBeforeTransitions.pathname;
  let previousState = currentMapState;
  currentMapState = JSON.stringify(store.getState().map);
  if(currentMapState !== previousState)
    window.localStorage.setItem('map', currentMapState);
});

if(module.hot) {
  module.hot.accept('./reducers/rootReducer.js', () => {
    const nextRootReducer = require('./reducers/rootReducer').default;
    store.replaceReducer(nextRootReducer);
  })
}


export default store;