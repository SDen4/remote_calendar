import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSaga, saveMaxValue } from '../../store/actions/actions';
import {
  columnsQuantitySelect,
  dataSelect,
  maxValueSelect,
} from '../../store/selectors';

export const MaxEmployee: React.FC = () => {
  const dispatch = useDispatch();

  const data = useSelector(dataSelect);
  const columnsQuantity = useSelector(columnsQuantitySelect);
  const maxValue = useSelector(maxValueSelect);

  const onChangeMaxEmployees = useCallback(
    (event) => {
      const value = Number(event?.target.value);
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
        onChange={onChangeMaxEmployees}
      />
    </>
  );
};
