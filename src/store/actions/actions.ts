import * as CONST from '../constants';

import { IData } from '../types';

export const fetchSaga = (
  data: IData[],
  maxValue: number,
  columnsQuantity: number,
) => {
  return {
    type: CONST.FETCH_SAGA,
    data,
    maxValue,
    columnsQuantity,
  } as const;
};

export const saveAllData = (data: IData[]) => {
  return {
    type: CONST.SAVE_ALL_DATA,
    data,
  } as const;
};

export const saveAllColumns = (columns: any[]) => {
  return {
    type: CONST.SAVE_ALL_COLUMNS,
    columns,
  } as const;
};

export const saveFirstRangeDate = (firstRangeDate: Date) => {
  return {
    type: CONST.SAVE_FIRST_RANGE_DATE,
    firstRangeDate,
  } as const;
};

export const setModalFlag = (modalFlag: boolean) => {
  return {
    type: CONST.SET_MODAL_FLAG,
    modalFlag,
  } as const;
};

export const addNewEmployee = (newEmployee: IData) => {
  return {
    type: CONST.ADD_NEW_EMPLOYEE,
    newEmployee,
  } as const;
};

export const saveMaxValue = (maxValue: number) => {
  return {
    type: CONST.SAVE_MAX_VALUE,
    maxValue,
  } as const;
};

export const setColumnsQuantity = (columnsQuantity: number) => {
  return {
    type: CONST.ADD_COLUMNS_QUANTITY,
    columnsQuantity,
  } as const;
};

export const setLoaderFlag = (loaderFlag: boolean) => {
  return {
    type: CONST.SET_LOADER_FLAG,
    loaderFlag,
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
type setLoaderFlagType = ReturnType<typeof setLoaderFlag>;

export type ActionsType =
  | FetchSagaType
  | saveAllDataType
  | saveAllColumnsType
  | saveFirstRangeDateType
  | setModalFlagType
  | addNewEmployeeType
  | saveMaxValueType
  | setColumnsQuantityType
  | setLoaderFlagType;
