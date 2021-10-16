import React from 'react';
import clsx from 'clsx';

import dateGenerator from '../../../utils/dateGenerator';
import monthsNames from '../../../utils/monthsNames';

import styles from './columns.module.css';
import { dateFormatter } from '../../../utils/dateFormatter';

const columnGenerator = (date: Date, maxValue: number, datesLength: number) => {
  if (!date) {
    return [];
  }

  const datesRange = dateGenerator(new Date(date), datesLength);
  const currentDate = dateFormatter(new Date());
  const maxValueIn = maxValue || 1;

  let monthDays: any = [];
  const columns: any = [
    {
      Header: <div className={styles.headerFirstCol}>Employee</div>,
      accessor: 'name',
    },
  ];

  for (let i = 0; i < datesRange.length; i++) {
    let currDayMonth = datesRange[i].date.slice(3, 5);
    let nextDayMonth =
      datesRange.length - 1 !== i && datesRange[i + 1].date.slice(3, 5);
    let year = datesRange[i].date.slice(6, 8);

    if (currDayMonth === nextDayMonth) {
      monthDays.push({
        Header: (
          <div
            className={clsx(
              datesRange[i].day === 0 || datesRange[i].day === 6
                ? styles.weekend
                : '',
              styles.cell,
              datesRange[i].date === currentDate && styles.currentDate,
            )}
          >
            {datesRange[i].date.slice(0, 2)}
          </div>
        ),
        accessor: `a_${datesRange[i].date.slice(0, 2)}${datesRange[
          i
        ].date.slice(3, 5)}${datesRange[i].date.slice(6, 8)}`,
        Cell: (cell: any) => {
          if (cell.row.index === cell.rows.length - 1) {
            const sortArr = cell.data.filter((el: any) =>
              Object.keys(el).join(' ').includes(cell.column.id),
            );
            return sortArr.length;
          }

          if (cell.row.index === cell.rows.length - 2) {
            const sortArr = cell.data.filter((el: any) =>
              Object.keys(el).join(' ').includes(cell.column.id),
            );
            const value = cell.rows.length - sortArr.length - 2;
            return (
              <div className={clsx(value > maxValueIn && styles.red)}>
                {value}
              </div>
            );
          }

          return <div>{cell.value}</div>;
        },
      });
    } else {
      monthDays.push({
        Header: (
          <div
            className={clsx(
              datesRange[i].day === 0 || datesRange[i].day === 6
                ? styles.weekend
                : '',
              styles.cell,
            )}
          >
            {datesRange[i].date.slice(0, 2)}
          </div>
        ),
        accessor: `a_${datesRange[i].date.slice(0, 2)}${datesRange[
          i
        ].date.slice(3, 5)}${datesRange[i].date.slice(6, 8)}`,
        Cell: (cell: any) => {
          if (cell.row.index === cell.rows.length - 1) {
            const sortArr = cell.data.filter((el: any) =>
              Object.keys(el).join(' ').includes(cell.column.id),
            );
            return sortArr.length;
          }

          if (cell.row.index === cell.rows.length - 2) {
            const sortArr = cell.data.filter((el: any) =>
              Object.keys(el).join(' ').includes(cell.column.id),
            );
            const value = cell.rows.length - sortArr.length - 2;
            return (
              <div className={clsx(value > maxValueIn && styles.red)}>
                {value}
              </div>
            );
          }
          return <div>{cell.value}</div>;
        },
      });

      columns.push({
        Header: (
          <div
            className={clsx(styles.cell, styles.headerTopCell)}
          >{`${monthsNames(currDayMonth)} '${year}`}</div>
        ),
        accessor: currDayMonth,
        columns: [...monthDays],
      });
      monthDays.length = 0;
    }
  }
  return columns;
};

export default columnGenerator;
