import { ActionsType } from '../actions/actions';

import { InitialStateType } from '../types';

import { initialData } from '../../constants/table';
import * as CONST from '../constants';

const initialState: InitialStateType = {
  data: initialData,
  columns: [],
  firstRangeDate: null,
  modalFlag: false,
  maxValue: 1,
  columnsQuantity: 90,
  loaderFlag: true,
};

export const Reducer = (
  state = initialState,
  action: ActionsType,
): typeof state => {
  switch (action.type) {
    case CONST.SAVE_ALL_DATA:
      return { ...state, data: action.data };

    case CONST.SAVE_ALL_COLUMNS:
      return { ...state, columns: action.columns };

    case CONST.SAVE_FIRST_RANGE_DATE:
      return { ...state, firstRangeDate: action.firstRangeDate };

    case CONST.SET_MODAL_FLAG:
      return { ...state, modalFlag: action.modalFlag };

    case CONST.ADD_NEW_EMPLOYEE:
      return { ...state, data: [action.newEmployee, ...state.data] };

    case CONST.SAVE_MAX_VALUE:
      return { ...state, maxValue: action.maxValue };

    case CONST.ADD_COLUMNS_QUANTITY:
      return { ...state, columnsQuantity: action.columnsQuantity };

    case CONST.SET_LOADER_FLAG:
      return { ...state, loaderFlag: action.loaderFlag };

    default:
      return state;
  }
};
