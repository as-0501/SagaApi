// export const getNews = () => ({
//   type: 'GET_NEWS',
// });

import {FETCH_MOVIES, FETCH_SUCCEED, FETCH_FAILED} from './actionTypes';

export const fetchMoviesAction = sort => {
  return {
    type: FETCH_MOVIES,
    sort,
  };
};

export const fetchSuccessAction = receivedMoives => {
  return {
    type: FETCH_SUCCEED,
    receivedMoives,
  };
};

export const fetchFailedAction = error => {
  return {
    type: FETCH_FAILED,
    error,
  };
};
