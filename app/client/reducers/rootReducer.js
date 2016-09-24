import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import hero from './hero'
import enemy from './enemy'
import game from './game'
import map from './map'
import startMap from './startMap'

const rootReducer = combineReducers({
  hero,
  enemy,
  game,
  map,
  startMap,
  routing: routerReducer
});

export default rootReducer;