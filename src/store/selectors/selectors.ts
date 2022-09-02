import { AppStateType } from '../RootReducer';

export const dataSelect = (store: AppStateType) => store.reducer.data;

export const columnsSelect = (store: AppStateType) => store.reducer.columns;

export const firstRangeDateSelect = (store: AppStateType) =>
  store.reducer.firstRangeDate;

export const modalFlagSelect = (store: AppStateType) => store.reducer.modalFlag;

export const maxValueSelect = (store: AppStateType) => store.reducer.maxValue;

export const columnsQuantitySelect = (store: AppStateType) =>
  store.reducer.columnsQuantity;

export const loaderFlagSelect = (store: AppStateType) =>
  store.reducer.loaderFlag;
