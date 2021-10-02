import { put, takeEvery } from 'redux-saga/effects';

import columnGenerator from '../../../components/Calendar/assets/columns';

import { saveAllColumns, saveAllData, saveFirstRangeDate } from '../../actions';

import { FETCH_SAGA } from '../../constants';

import { FetchSagaActionType, IData } from '../../types';

function* sagaWorker(action: FetchSagaActionType) {
  try {
    const firstRangeDateFromLocalStorage: Date = yield localStorage.getItem(
      'firstRangeDate',
    );
    const calendarDataFromLocalStorage: IData[] = yield JSON.parse(
      localStorage.getItem('calendar') || '[]',
    );

    if (firstRangeDateFromLocalStorage !== null) {
      const initialColumns: any[] = yield columnGenerator(
        firstRangeDateFromLocalStorage,
      );

      yield put(saveAllColumns(initialColumns));
      yield put(saveFirstRangeDate(firstRangeDateFromLocalStorage));
    } else {
      const newDay = new Date();
      const initialColumns: any[] = yield columnGenerator(newDay);

      yield put(saveAllColumns(initialColumns));
      yield localStorage.setItem('firstRangeDate', String(newDay));
    }

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
