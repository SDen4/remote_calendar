import { put, takeEvery } from 'redux-saga/effects';

import {
  saveAllColumns,
  saveAllData,
  saveFirstRangeDate,
  saveMaxValue,
  setColumnsQuantity,
  setLoaderFlag,
} from '../actions/actions';

import columnGenerator from '../../components/Calendar/assets/columns';

import { FetchSagaActionType, IData } from '../types';

import { FETCH_SAGA } from '../constants';

function* sagaWorker(action: FetchSagaActionType) {
  try {
    const firstRangeDateFromLocalStorage: Date = yield localStorage.getItem(
      'firstRangeDate',
    );
    const calendarDataFromLocalStorage: IData[] = yield JSON.parse(
      localStorage.getItem('calendar') || '[]',
    );
    const maxValue: number = yield localStorage.getItem('maxValue');
    const columnsQuantityFromLocalStorage: number = yield localStorage.getItem(
      'columnsQuantity',
    );

    if (maxValue) {
      yield put(saveMaxValue(Number(maxValue)));
    } else {
      yield localStorage.setItem('maxValue', String(action.maxValue));
    }

    let initialColumns: any[] = yield [];

    if (columnsQuantityFromLocalStorage) {
      yield put(setColumnsQuantity(Number(columnsQuantityFromLocalStorage)));
    } else {
      yield localStorage.setItem(
        'columnsQuantity',
        String(action.columnsQuantity),
      );
    }

    if (firstRangeDateFromLocalStorage) {
      initialColumns = yield columnGenerator(
        firstRangeDateFromLocalStorage,
        maxValue,
        columnsQuantityFromLocalStorage || action.columnsQuantity,
      );
      yield put(saveFirstRangeDate(firstRangeDateFromLocalStorage));
    } else {
      initialColumns = yield columnGenerator(
        new Date(),
        action.maxValue,
        columnsQuantityFromLocalStorage || action.columnsQuantity,
      );
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
  } finally {
    yield put(setLoaderFlag(false));
  }
}

export function* FetchSagaWatcher() {
  yield takeEvery(FETCH_SAGA, sagaWorker);
}
