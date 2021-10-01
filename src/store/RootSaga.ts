import { fork, all } from 'redux-saga/effects';

import { FirstSagaWatcher } from './Reducer/sagas/FirstSaga';

export default function* rootSaga() {
  yield all([fork(FirstSagaWatcher)]);
}
