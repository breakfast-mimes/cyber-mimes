import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import hero from './hero'
import enemy from './enemy'

const rootReducer = combineReducers({
  hero,
  enemy,
  routing: routerReducer
});

export default rootReducer;