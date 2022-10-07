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
  loaderFlag: boolean;
}
