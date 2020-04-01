import {call} from 'redux-saga/effects';

import {watchFetchMovies} from './contentSaga';

export default function* rootSaga() {
  yield call(watchFetchMovies);
}
