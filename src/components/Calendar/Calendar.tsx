/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTable } from 'react-table';
import clsx from 'clsx';

import { saveAllData } from '../../store/actions';

import { dateFormatter } from '../../utils/dateFormatter';

import { defaultCell } from '../../constants/table';

import { IData } from '../../store/types';
import { ICalendar, IStartPoint } from './types';

import styles from './Calendar.module.css';

const Calendar: React.FC<ICalendar> = ({ data, columns }) => {
  const dispatch = useDispatch();

  const currentDate = dateFormatter(new Date());

  const [isCtrlPressed, setIsCtrlPressed] = useState<boolean>(false);
  const [startPoint, setStartPoint] = useState<IStartPoint>(defaultCell);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const deleteRowHandler = (delRow: string) => {
    const newData = data.filter((el: IData) => el.name !== delRow);

    dispatch(saveAllData(newData));
    localStorage.setItem('calendar', JSON.stringify(newData));
  };

  // catch and fix the pushing of Ctrl
  useEffect(() => {
    window.addEventListener('keydown', (event: any) => {
      if (event.keyCode === 17) {
        setIsCtrlPressed(true);
      }
    });
  }, []);
  useEffect(() => {
    window.addEventListener('keyup', (event: any) => {
      if (event.keyCode === 17) {
        setStartPoint(defaultCell);
        setIsCtrlPressed(false);
      }
    });
  }, []);

  const onCellClick = (cellId: string, rowId: string) => {
    let newData: IData[] = data.concat();

    // save to local state the 1st multy change click
    if (isCtrlPressed && startPoint.row === '') {
      setStartPoint({ row: rowId, cell: cellId });
    }

    // the 2nd click
    if (isCtrlPressed && startPoint.row === rowId) {
      let start = Number(
        `${startPoint.cell.slice(6)}${startPoint.cell.slice(
          4,
          6,
        )}${startPoint.cell.slice(2, 4)}`,
      );
      let end = Number(
        `${cellId.slice(6)}${cellId.slice(4, 6)}${cellId.slice(2, 4)}`,
      );

      if (end < start) {
        [start, end] = [end - 1, start - 1];
      }

      for (let i = start + 1; i <= end; i++) {
        const newCellId = `a_${String(i).slice(4)}${String(i).slice(
          2,
          4,
        )}${String(i).slice(0, 2)}`;

        if (Object.keys(newData[Number(rowId)]).includes(newCellId)) {
          delete newData[Number(rowId)][newCellId];
        } else {
          newData[Number(rowId)][newCellId] = 1;
        }
      }
      setStartPoint(defaultCell);
      setIsCtrlPressed(false);
    } else {
      // the single click
      // eslint-disable-next-line no-lonely-if
      if (Object.keys(newData[Number(rowId)]).includes(cellId)) {
        delete newData[Number(rowId)][cellId];
      } else {
        newData[Number(rowId)][cellId] = 1;
      }
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
