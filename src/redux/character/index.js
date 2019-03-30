import { combineReducers } from 'redux';
import id from './id';
import profile from './profile';
import movies from './movies';
import errors from './errors';

export default combineReducers({
  id,
  profile,
  movies,
  errors
});
