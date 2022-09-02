import { fork, all } from 'redux-saga/effects';

import { FetchSagaWatcher } from './sagas/FetchSaga';

export default function* rootSaga() {
  yield all([fork(FetchSagaWatcher)]);
}
