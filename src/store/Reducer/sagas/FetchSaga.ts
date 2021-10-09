import { put, takeEvery } from 'redux-saga/effects';

import columnGenerator from '../../../components/Calendar/assets/columns';

import {
  saveAllColumns,
  saveAllData,
  saveFirstRangeDate,
  saveMaxValue,
} from '../../actions';

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
    const maxValue: number = yield localStorage.getItem('maxValue');

    if (maxValue) {
      yield put(saveMaxValue(maxValue));
    }

    let initialColumns: any[] = yield [];

    if (firstRangeDateFromLocalStorage) {
      initialColumns = yield columnGenerator(firstRangeDateFromLocalStorage);
      yield put(saveFirstRangeDate(firstRangeDateFromLocalStorage));
    } else {
      initialColumns = yield columnGenerator(new Date());
      yield localStorage.setItem('firstRangeDate', String(new Date()));
    }

    yield put(saveAllColumns(initialColumns));

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
