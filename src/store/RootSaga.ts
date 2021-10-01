import { fork, all } from 'redux-saga/effects';

import { FetchSagaWatcher } from './Reducer/sagas/FetchSaga';

export default function* rootSaga() {
  yield all([fork(FetchSagaWatcher)]);
}
