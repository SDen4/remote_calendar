import { SAVE_ALL_DATA } from '../constants';
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

    default:
      return state;
  }
};
