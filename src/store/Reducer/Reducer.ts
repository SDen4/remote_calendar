import {
  SAVE_ALL_DATA,
  SAVE_ALL_COLUMNS,
  SAVE_FIRST_RANGE_DATE,
  SET_MODAL_FLAG,
  ADD_NEW_EMPLOYEE,
  SAVE_MAX_VALUE,
  ADD_COLUMNS_QUANTITY,
} from '../constants';

import { initialData } from '../../constants/table';

import { ActionsType } from '../actions';
import { InitialStateType } from '../types';

const initialState: InitialStateType = {
  data: initialData,
  columns: [],
  firstRangeDate: null,
  modalFlag: false,
  maxValue: 1,
  columnsQuantity: 90,
};

export const Reducer = (
  state = initialState,
  action: ActionsType,
): typeof state => {
  switch (action.type) {
    case SAVE_ALL_DATA:
      return {
        ...state,
        data: action.data,
      };

    case SAVE_ALL_COLUMNS:
      return {
        ...state,
        columns: action.columns,
      };

    case SAVE_FIRST_RANGE_DATE:
      return {
        ...state,
        firstRangeDate: action.firstRangeDate,
      };

    case SET_MODAL_FLAG:
      return {
        ...state,
        modalFlag: action.modalFlag,
      };

    case ADD_NEW_EMPLOYEE:
      return {
        ...state,
        data: [action.newEmployee, ...state.data],
      };

    case SAVE_MAX_VALUE:
      return {
        ...state,
        maxValue: action.maxValue,
      };

    case ADD_COLUMNS_QUANTITY:
      return {
        ...state,
        columnsQuantity: action.columnsQuantity,
      };

    default:
      return state;
  }
};
