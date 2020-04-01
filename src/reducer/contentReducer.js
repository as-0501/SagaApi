import {FETCH_FAILED, FETCH_SUCCEED} from '../actions/actionTypes';

const contentReducer = (list = {}, action) => {
  console.log(action.type, action.receivedMovies);
  switch (action.type) {
    case FETCH_SUCCEED:
      return action.receivedMovies;
    case FETCH_FAILED:
      return [];
    default:
      return list;
  }
};

export default contentReducer;
