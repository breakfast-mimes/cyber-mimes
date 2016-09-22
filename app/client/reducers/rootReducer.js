import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import hero from './hero'
import enemy from './enemy'
import game from './game'
import map from './map'

const rootReducer = combineReducers({
  hero,
  enemy,
  game,
  map,
  routing: routerReducer
});

export default rootReducer;