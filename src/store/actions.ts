import {
  FETCH_SAGA,
  SAVE_ALL_DATA,
  SAVE_ALL_COLUMNS,
  SAVE_FIRST_RANGE_DATE,
} from './constants';
import { IData } from './types';

export const fetchSaga = (data: IData[]) => {
  return {
    type: FETCH_SAGA,
    data,
  } as const;
};

export const saveAllData = (data: IData[]) => {
  return {
    type: SAVE_ALL_DATA,
    data,
  } as const;
};

export const saveAllColumns = (columns: any[]) => {
  return {
    type: SAVE_ALL_COLUMNS,
    columns,
  } as const;
};

export const saveFirstRangeDate = (firstRangeDate: Date) => {
  return {
    type: SAVE_FIRST_RANGE_DATE,
    firstRangeDate,
  } as const;
};

type FetchSagaType = ReturnType<typeof fetchSaga>;
type saveAllDataType = ReturnType<typeof saveAllData>;
type saveAllColumnsType = ReturnType<typeof saveAllColumns>;
type saveFirstRangeDateType = ReturnType<typeof saveFirstRangeDate>;

export type ActionsType =
  | FetchSagaType
  | saveAllDataType
  | saveAllColumnsType
  | saveFirstRangeDateType;
