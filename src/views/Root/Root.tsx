import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import Modal from '../../ui/Modal';
import Button from '../../ui/Button';
import Calendar from '../../components/Calendar';
import ModalContent from '../../components/ModalContent';
import ModalDelContent from '../../components/ModalDelContent';
import columnGenerator from '../../components/Calendar/assets/columns';

import { AppStateType } from '../../store/RootReducer';
import { InitialStateType } from '../../store/types';
import {
  fetchSaga,
  saveMaxValue,
  setColumnsQuantity,
  setModalFlag,
} from '../../store/actions';

import styles from './Root.module.css';

const Root: React.FC = () => {
  const dispatch = useDispatch();

  const store = useSelector<AppStateType, InitialStateType>(
    (store) => store.reducer,
  );

  const [delModal, setDelModal] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchSaga(store.data, store.maxValue, store.columnsQuantity));
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

  const onChangeMaxEmployees = (value: number) => {
    if (value < 0) {
      return;
    }

    localStorage.setItem('maxValue', String(value));
    dispatch(saveMaxValue(value));
    dispatch(fetchSaga(store.data, value, store.columnsQuantity));
  };

  useEffect(() => {
    // @ts-ignore
    return columnGenerator(store.firstRangeDate, store.maxValue, 90);
  }, [store.firstRangeDate, store.maxValue]);

  const addPeriodHandler = () => {
    const newColumnsQuantity = store.columnsQuantity + 90;
    localStorage.setItem('columnsQuantity', String(newColumnsQuantity));
    dispatch(setColumnsQuantity(newColumnsQuantity));
    dispatch(fetchSaga(store.data, store.maxValue, newColumnsQuantity));
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

        {store.data.length > 2 && (
          <Button
            buttonText={
              store.data.length === 3
                ? 'Delete employee'
                : 'Delete all employees'
            }
            buttonType="button"
            onButtonClick={onToggleDelModal}
            stylesButton={clsx(
              styles.deleteButton,
              store.data.length <= 2 && styles.disabledButton,
            )}
            disabled={store.data.length <= 2}
          />
        )}
      </section>

      {store.data.length > 2 && (
        <>
          <section
            className={clsx(styles.section_wrapper, styles.calendar_wrapper)}
          >
            <Calendar data={store.data} columns={store.columns} />

            <div className={styles.addPeriodButtonWrapper}>
              <Button
                buttonText="Add period"
                buttonType="button"
                stylesButton={styles.addPeriodButton}
                onButtonClick={addPeriodHandler}
              />
            </div>
          </section>

          <section
            className={clsx(styles.section_wrapper, styles.sectionTotal)}
          >
            <span>Total employees:</span>
            <span>{store.data.length - 2}</span>
          </section>

          <section
            className={clsx(styles.section_wrapper, styles.sectionMaxEmployees)}
          >
            <span>Set max employees in office</span>
            <input
              type="number"
              min={1}
              value={store.maxValue}
              onChange={(event) =>
                onChangeMaxEmployees(Number(event?.target.value))
              }
            />
          </section>

          <section
            className={clsx(
              styles.section_wrapper,
              styles.section_wrapper_notice,
            )}
          >
            <h3>Notice</h3>

            <div className={styles.example_item}>
              <div className={styles.examle_empty} />
              <span>office</span>
            </div>

            <div className={styles.example_item}>
              <div className={styles.examle_empty}>
                <div className={styles.examle_full} />
              </div>
              <span>remote</span>
            </div>

            <p>
              You can change statuses of one employee in a few days at once by
              click holding &apos;Ctrl&apos; button for Windows and Linux or
              &apos;Command&apos; for MacOs
            </p>
          </section>
        </>
      )}
    </div>
  );
};

export default Root;
