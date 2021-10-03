import {
  SAVE_ALL_DATA,
  SAVE_ALL_COLUMNS,
  SAVE_FIRST_RANGE_DATE,
  SET_MODAL_FLAG,
} from '../constants';
import { ActionsType } from '../actions';
import { InitialStateType } from '../types';

const initialState: InitialStateType = {
  data: [
    {
      name: 'Total office',
    },
    {
      name: 'Total remote',
    },
  ],
  columns: [],
  firstRangeDate: null,
  modalFlag: false,
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

    default:
      return state;
  }
};
