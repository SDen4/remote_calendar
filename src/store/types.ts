import { FETCH_SAGA } from './constants';

export interface IData {
  name: string;
  [key: string]: string | number;
}

export interface InitialStateType {
  data: IData[];
  columns: any[];
  firstRangeDate: Date | null;
  modalFlag: boolean;
  maxValue: number;
  columnsQuantity: number;
}

export interface FetchSagaActionType {
  type: typeof FETCH_SAGA;
  data: IData[];
  maxValue: number;
  columnsQuantity: number;
}
