import { put, takeEvery } from 'redux-saga/effects';

import { saveAllData } from '../../actions';

import { FETCH_SAGA } from '../../constants';
import { FetchSagaActionType, IData } from '../../types';

function* sagaWorker(action: FetchSagaActionType) {
  try {
    const calendarDataFromLocalStorage: IData[] = yield JSON.parse(
      localStorage.getItem('calendar') || '[]',
    );

    if (calendarDataFromLocalStorage.length) {
      yield put(saveAllData(calendarDataFromLocalStorage));
    } else {
      yield localStorage.setItem('calendar', JSON.stringify(action.data));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export function* FetchSagaWatcher() {
  yield takeEvery(FETCH_SAGA, sagaWorker);
}
