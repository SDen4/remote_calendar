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
    default:
      return state;
  }
};
