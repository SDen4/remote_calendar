/* eslint-disable indent */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useTable } from 'react-table';
import clsx from 'clsx';

import { saveAllData } from '../../store/actions';

import { dateFormatter } from '../../utils/dateFormatter';

import { IData } from '../../store/types';
import { ICalendar } from './types';

import styles from './Calendar.module.css';

const Calendar: React.FC<ICalendar> = ({ data, columns }) => {
  const dispatch = useDispatch();

  const currentDate = dateFormatter(new Date());

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const deleteRowHandler = (delRow: string) => {
    const newData = data.filter((el: IData) => el.name !== delRow);

    dispatch(saveAllData(newData));
    localStorage.setItem('calendar', JSON.stringify(newData));
  };

  const onCellClick = (cellId: string, rowId: string) => {
    let newData: IData[] = data.concat();

    if (Object.keys(newData[Number(rowId)]).includes(cellId)) {
      delete newData[Number(rowId)][cellId];
    } else {
      newData[Number(rowId)][cellId] = 1;
    }

    dispatch(saveAllData(newData));
    localStorage.setItem('calendar', JSON.stringify(newData));
  };

  return (
    <table {...getTableProps()} className={styles.table}>
      <thead>
        {headerGroups.map((headerGroup, j) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            key={`${headerGroup} ${Math.random()}`}
          >
            {headerGroup.headers.map((column, i) => (
              <th
                {...column.getHeaderProps()}
                className={clsx(
                  i === 0 && styles.firstCell,
                  i === 0 && j === 0 && styles.hiddenCell,
                  i === 0 && j === 1 && styles.hiddenCell2,
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
                      String(cell.column.id.slice(2)) ===
                        String(
                          `${currentDate.slice(0, 2)}${currentDate.slice(
                            3,
                            5,
                          )}${currentDate.slice(6, 8)}`,
                        ) && styles.currentDate,
                    )}
                    key={`${cell} ${Math.random()}`}
                  >
                    <div
                      className={clsx(i === 0 && styles.left, styles.tdInner)}
                    >
                      {i !== 0 &&
                      row.index !== data.length - 1 &&
                      row.index !== data.length - 2 ? (
                        <button
                          type="button"
                          className={clsx(
                            styles.cellButton,
                            cell.value === 1 && styles.cellButtonFull,
                          )}
                          onClick={() =>
                            onCellClick(cell.column.id, cell.row.id)
                          }
                        >
                          {cell.render('Cell')}
                        </button>
                      ) : (
                        cell.render('Cell')
                      )}
                      {i === 0 &&
                        cell.value !== 'Total office' &&
                        cell.value !== 'Total remote' && (
                          <button
                            type="button"
                            className={styles.buttonDelRow}
                            onClick={() => deleteRowHandler(cell.value)}
                          >
                            <span />
                          </button>
                        )}
                    </div>
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
