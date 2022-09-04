import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { Root } from './view/Root';

import { RootReducer } from './store/RootReducer';
import { RootSaga } from './store/RootSaga';

import './index.css';

const saga = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(RootReducer, composeEnhancers(applyMiddleware(saga)));

saga.run(RootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root'),
);
