import { ActionsType } from '../actions';
import { InitialStateType } from '../types';

const initialState: InitialStateType = {
  data: [],
};

export const Reducer = (
  state = initialState,
  action: ActionsType,
): typeof state => {
  // eslint-disable-next-line no-console
  console.log(action);
  return state;
};
