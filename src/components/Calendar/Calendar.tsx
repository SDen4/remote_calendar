import React from 'react';
import { useTable } from 'react-table';

import columns from './assets/columns';

import styles from './Calendar.module.css';

const Calendar: React.FC = () => {
  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    [],
  );

  // const tableInstance = useTable({ columns, data });

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
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className={styles.tableHeader}
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
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className={styles.tableCell}
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
