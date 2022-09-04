import { all, fork } from 'redux-saga/effects';

import { FetchSagaWatcher } from './sagas/FetchSaga';

export function* RootSaga() {
  yield all([fork(FetchSagaWatcher)]);
}
