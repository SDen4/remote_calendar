import { FETCH_SAGA, SAVE_ALL_DATA } from './constants';
import { IData } from './types';

export const fetchSaga = (data: IData[]) => {
  return {
    type: FETCH_SAGA,
    data,
  } as const;
};

export const saveAllData = (data: IData[]) => {
  return {
    type: SAVE_ALL_DATA,
    data,
  } as const;
};

type FetchSagaType = ReturnType<typeof fetchSaga>;
type saveAllDataType = ReturnType<typeof saveAllData>;

export type ActionsType = FetchSagaType | saveAllDataType;
