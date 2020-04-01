/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

//Redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './src/reducer/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/rootSagas';
import DataContainer from './container';

//Sagas
const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

const App = () => {
  return (
    <Provider store={store}>
      <DataContainer />
    </Provider>
  );
};

sagaMiddleware.run(rootSaga);

AppRegistry.registerComponent(appName, () => App);
