import {
  FETCH_SAGA,
  SAVE_ALL_DATA,
  SAVE_ALL_COLUMNS,
  SAVE_FIRST_RANGE_DATE,
  SET_MODAL_FLAG,
  ADD_NEW_EMPLOYEE,
  SAVE_MAX_VALUE,
  ADD_COLUMNS_QUANTITY,
} from './constants';
import { IData } from './types';

export const fetchSaga = (
  data: IData[],
  maxValue: number,
  columnsQuantity: number,
) => {
  return {
    type: FETCH_SAGA,
    data,
    maxValue,
    columnsQuantity,
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

export const setModalFlag = (modalFlag: boolean) => {
  return {
    type: SET_MODAL_FLAG,
    modalFlag,
  } as const;
};

export const addNewEmployee = (newEmployee: IData) => {
  return {
    type: ADD_NEW_EMPLOYEE,
    newEmployee,
  } as const;
};

export const saveMaxValue = (maxValue: number) => {
  return {
    type: SAVE_MAX_VALUE,
    maxValue,
  } as const;
};

export const setColumnsQuantity = (columnsQuantity: number) => {
  return {
    type: ADD_COLUMNS_QUANTITY,
    columnsQuantity,
  } as const;
};

type FetchSagaType = ReturnType<typeof fetchSaga>;
type saveAllDataType = ReturnType<typeof saveAllData>;
type saveAllColumnsType = ReturnType<typeof saveAllColumns>;
type saveFirstRangeDateType = ReturnType<typeof saveFirstRangeDate>;
type setModalFlagType = ReturnType<typeof setModalFlag>;
type addNewEmployeeType = ReturnType<typeof addNewEmployee>;
type saveMaxValueType = ReturnType<typeof saveMaxValue>;
type setColumnsQuantityType = ReturnType<typeof setColumnsQuantity>;

export type ActionsType =
  | FetchSagaType
  | saveAllDataType
  | saveAllColumnsType
  | saveFirstRangeDateType
  | setModalFlagType
  | addNewEmployeeType
  | saveMaxValueType
  | setColumnsQuantityType;
