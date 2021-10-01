import { FIRST_SAGA } from './constants';

export const fetchSaga = () => {
  return {
    type: FIRST_SAGA,
  } as const;
};

type FetchSagaType = ReturnType<typeof fetchSaga>;

export type ActionsType = FetchSagaType;
