import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import Modal from '../../ui/Modal';
import Button from '../../ui/Button';
import Calendar from '../../components/Calendar';
import ModalContent from '../../components/ModalContent';
import ModalDelContent from '../../components/ModalDelContent';

import { AppStateType } from '../../store/RootReducer';
import { InitialStateType } from '../../store/types';
import { fetchSaga, saveMaxValue, setModalFlag } from '../../store/actions';

import styles from './Root.module.css';

const Root: React.FC = () => {
  const dispatch = useDispatch();

  const store = useSelector<AppStateType, InitialStateType>(
    (store) => store.reducer,
  );

  const [delModal, setDelModal] = useState<boolean>(false);

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

  const onToggleDelModal = () => {
    setDelModal(!delModal);
  };

  const onChangeMaxEmployees = (value: any) => {
    if (value < 0) {
      return;
    }
    dispatch(saveMaxValue(value));
    localStorage.setItem('maxValue', value);

    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <div className={styles.root_wrapper}>
      {store.modalFlag && (
        <Modal onCloseButtonClick={onCloseModal} modalContent={ModalContent} />
      )}

      {delModal && (
        <Modal
          onCloseButtonClick={onToggleDelModal}
          modalContent={ModalDelContent}
        />
      )}

      <header>
        <h1>Remote Calendar</h1>
      </header>

      <section className={clsx(styles.section_wrapper, styles.buttons_wrapper)}>
        <Button
          buttonText="Add employee"
          buttonType="button"
          onButtonClick={onOpenModal}
        />

        <Button
          buttonText={
            store.data.length === 3 ? 'Delete employee' : 'Delete all employees'
          }
          buttonType="button"
          onButtonClick={onToggleDelModal}
          stylesButton={clsx(
            styles.deleteButton,
            store.data.length <= 2 && styles.disabledButton,
          )}
          disabled={store.data.length <= 2}
        />
      </section>

      <section
        className={clsx(styles.section_wrapper, styles.calendar_wrapper)}
      >
        <Calendar data={store.data} columns={store.columns} />
      </section>

      <section className={clsx(styles.section_wrapper, styles.sectionTotal)}>
        <span>Total employees:</span>
        <span>{store.data.length - 2}</span>
      </section>

      <section
        className={clsx(styles.section_wrapper, styles.sectionMaxEmployees)}
      >
        <span>Set max employees in office</span>
        <input
          type="number"
          min="0"
          value={store.maxValue}
          onChange={(event) => onChangeMaxEmployees(event?.target.value)}
        />
      </section>
    </div>
  );
};

export default Root;
