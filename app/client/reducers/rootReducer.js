import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import hero from './hero'
import enemy from './enemy'
import game from './game'

const rootReducer = combineReducers({
  hero,
  enemy,
  game,
  routing: routerReducer
});

export default rootReducer;