import { FETCH_SAGA } from './constants';

export interface IData {
  name: string;
  [key: string]: string | number;
}

export interface InitialStateType {
  data: IData[];
  columns: any[];
  firstRangeDate: Date | null;
}

export interface FetchSagaActionType {
  type: typeof FETCH_SAGA;
  data: IData[];
}
