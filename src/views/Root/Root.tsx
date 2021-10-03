import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import Modal from '../../ui/Modal';
import Calendar from '../../components/Calendar';

import { InitialStateType } from '../../store/types';
import { fetchSaga, setModalFlag } from '../../store/actions';
import { AppStateType } from '../../store/RootReducer';

import styles from './Root.module.css';
import Button from '../../ui/Button';

const Root: React.FC = () => {
  const dispatch = useDispatch();

  const store = useSelector<AppStateType, InitialStateType>(
    (store) => store.reducer,
  );

  useEffect(() => {
    dispatch(fetchSaga(store.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const onOpenModal = () => {
    dispatch(setModalFlag(true));
  };

  const onCloseModal = () => {
    dispatch(setModalFlag(false));
  };

  return (
    <div className={styles.root_wrapper}>
      {store.modalFlag && <Modal onCloseButtonClick={onCloseModal} />}

      <header>
        <h1>Remote Calendar</h1>
      </header>

      <section className={styles.section_wrapper}>
        <Button
          buttonText="Add employee"
          buttonType="button"
          onButtonClick={onOpenModal}
        />
      </section>

      <section
        className={clsx(styles.section_wrapper, styles.calendar_wrapper)}
      >
        <Calendar data={store.data} columns={store.columns} />
      </section>
    </div>
  );
};

export default Root;
