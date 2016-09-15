import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import hero from './hero'

const rootReducer = combineReducers({
  hero,
  routing: routerReducer
});

export default rootReducer;