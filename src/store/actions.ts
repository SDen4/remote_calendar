import { FIRST_SAGA } from './constants';

export const firstSaga = () => {
  return {
    type: FIRST_SAGA,
  } as const;
};

type firstSagaType = ReturnType<typeof firstSaga>;

export type ActionsType = firstSagaType;
