import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSaga, saveMaxValue } from '../../store/actions';

import { AppStateType } from '../../store/RootReducer';
import { IData } from '../../store/types';

const MaxEmployee: React.FC = () => {
  const dispatch = useDispatch();

  const data = useSelector<AppStateType, IData[]>(
    (store) => store.reducer.data,
  );
  const columnsQuantity = useSelector<AppStateType, number>(
    (store) => store.reducer.columnsQuantity,
  );
  const maxValue = useSelector<AppStateType, number>(
    (store) => store.reducer.maxValue,
  );

  const onChangeMaxEmployees = useCallback(
    (value: number) => {
      if (value < 0) {
        return;
      }

      localStorage.setItem('maxValue', String(value));
      dispatch(saveMaxValue(value));
      dispatch(fetchSaga(data, value, columnsQuantity));
    },
    [dispatch, columnsQuantity, data],
  );

  return (
    <>
      <label htmlFor="label">Set max employees in office</label>
      <input
        id="label"
        type="number"
        min={1}
        value={maxValue}
        onChange={(event) => onChangeMaxEmployees(Number(event?.target.value))}
      />
    </>
  );
};

export default MaxEmployee;
