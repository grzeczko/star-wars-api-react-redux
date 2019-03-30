import {
  FETCH_RESOURCES_FAIL,
  FETCH_RESOURCES_SUCCESS
} from './actions';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESOURCES_FAIL:
      return 'Error retrieving movies';
      case FETCH_RESOURCES_SUCCESS:
        return null;
    default:
      return state;
  }
};
