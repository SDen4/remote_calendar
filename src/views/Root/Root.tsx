import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import Calendar from '../../components/Calendar';

import { IData } from '../../store/types';
import { fetchSaga } from '../../store/actions';
import { AppStateType } from '../../store/RootReducer';

import styles from './Root.module.css';
import Button from '../../ui/Button';

const Root: React.FC = () => {
  const dispatch = useDispatch();

  const columns = useSelector<AppStateType, any[]>(
    (store) => store.reducer.columns,
  );
  const data = useSelector<AppStateType, IData[]>(
    (store) => store.reducer.data,
  );

  useEffect(() => {
    dispatch(fetchSaga(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const onButtonClick = () => {
    return null;
  };

  return (
    <div className={styles.root_wrapper}>
      <header>
        <h1>Remote Calendar</h1>
      </header>

      <section className={styles.section_wrapper}>
        <Button
          buttonText="Add employee"
          buttonType="button"
          onButtonClick={onButtonClick}
        />
      </section>

      <section
        className={clsx(styles.section_wrapper, styles.calendar_wrapper)}
      >
        <Calendar data={data} columns={columns} />
      </section>
    </div>
  );
};

export default Root;
