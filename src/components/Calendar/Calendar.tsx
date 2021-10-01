import React from 'react';
import { useTable } from 'react-table';

import { ICalendar } from './types';
import columns from './assets/columns';

import styles from './Calendar.module.css';
import clsx from 'clsx';

const Calendar: React.FC<ICalendar> = ({ data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className={styles.table}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            key={`${headerGroup} ${Math.random()}`}
          >
            {headerGroup.headers.map((column, i) => (
              <th
                {...column.getHeaderProps()}
                className={clsx(
                  i === 0 && styles.firstCell,
                  styles.tableHeader,
                )}
                key={`${column} ${Math.random()}`}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={`${row} ${Math.random()}`}>
              {row.cells.map((cell, i) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className={clsx(
                      i === 0 && styles.firstCell,
                      styles.tableCell,
                    )}
                    key={`${cell} ${Math.random()}`}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Calendar;
