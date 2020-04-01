import {
  FETCH_MOVIES,
  FETCH_SUCCEED,
  FETCH_FAILED,
} from '../actions/actionTypes';

import {put, takeLatest} from 'redux-saga/effects';

import {ApiCall} from './networkCall';

function* fetchMovies() {
  try {
    const receivedMovies = yield ApiCall.getDataFromApi();
    console.log('receivedMovies--->', receivedMovies);
    yield put({type: FETCH_SUCCEED, receivedMovies: receivedMovies});
  } catch (error) {
    yield put({type: FETCH_FAILED, error});
  }
}

export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIES, fetchMovies);
}
