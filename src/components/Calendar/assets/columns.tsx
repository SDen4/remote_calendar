import React from 'react';
import clsx from 'clsx';

import dateGenerator from '../../../utils/dateGenerator';
import monthsNames from '../../../utils/monthsNames';

import styles from './columns.module.css';

const datesRange = dateGenerator();

let monthDays: any = [];
const columns: any = [];

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
          )}
        >
          {datesRange[i].date.slice(0, 2)}
        </div>
      ),
      accessor: datesRange[i].date,
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
      accessor: datesRange[i].date,
    });

    columns.push({
      Header: (
        <div className={styles.cell}>{`${monthsNames(
          currDayMonth,
        )} '${year}`}</div>
      ),
      accessor: currDayMonth,
      columns: [...monthDays],
    });
    monthDays.length = 0;
  }
}

export default columns;
