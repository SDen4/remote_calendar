import { IData } from '../../store/types';

export interface ICalendar {
  data: IData[];
  columns: any[];
}

export interface IStartPoint {
  row: string;
  cell: string;
}
