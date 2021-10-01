import { takeEvery } from 'redux-saga/effects';

import { FIRST_SAGA } from '../../constants';

function* sagaWorker() {
  try {
    // eslint-disable-next-line no-console
    yield console.log('first saga');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export function* FirstSagaWatcher() {
  yield takeEvery(FIRST_SAGA, sagaWorker);
}
