import { combineReducers } from 'redux';
import id from './id';
import movies from './movies';
import errors from './errors';

export default combineReducers({
  id,
  movies,
  errors
});
