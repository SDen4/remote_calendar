import React, { memo, Suspense, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import Button from '../../ui/Button';
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
import Notice from '../../components/Notice';

const LazyCalendar = React.lazy(() => import('../../components/Calendar'));
const LazyModalContent = React.lazy(
  () => import('../../components/ModalContent'),
);
const LazyModalDelContent = React.lazy(
  () => import('../../components/ModalDelContent'),
);
const LazyModal = React.lazy(() => import('../../ui/Modal'));

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

  const onOpenModal = useCallback(() => {
    dispatch(setModalFlag(true));
  }, [dispatch]);

  const onCloseModal = useCallback(() => {
    dispatch(setModalFlag(false));
  }, [dispatch]);

  const onToggleDelModal = useCallback(() => {
    setDelModal(!delModal);
  }, [delModal]);

  const onChangeMaxEmployees = useCallback(
    (value: number) => {
      if (value < 0) {
        return;
      }

      localStorage.setItem('maxValue', String(value));
      dispatch(saveMaxValue(value));
      dispatch(fetchSaga(store.data, value, store.columnsQuantity));
    },
    [dispatch, store.columnsQuantity, store.data],
  );

  useEffect(() => {
    // @ts-ignore
    return columnGenerator(store.firstRangeDate, store.maxValue, 90);
  }, [store.firstRangeDate, store.maxValue]);

  const addPeriodHandler = useCallback(() => {
    const newColumnsQuantity = store.columnsQuantity + 90;
    localStorage.setItem('columnsQuantity', String(newColumnsQuantity));
    dispatch(setColumnsQuantity(newColumnsQuantity));
    dispatch(fetchSaga(store.data, store.maxValue, newColumnsQuantity));
  }, [dispatch, store.columnsQuantity, store.data, store.maxValue]);

  // app height
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [appHeight, setAppHeight] = useState<number>(0);
  useEffect(() => setAppHeight(window.innerHeight), []);

  // resize
  window.addEventListener(
    'resize',
    () => setAppHeight(window.outerHeight),
    true,
  );
  // app height

  return (
    <div
      className={styles.root_wrapper}
      style={window.innerWidth < 480 ? { minHeight: appHeight } : {}}
    >
      {store.modalFlag && (
        <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
          <LazyModal
            onCloseButtonClick={onCloseModal}
            modalContent={LazyModalContent}
          />
        </Suspense>
      )}

      {delModal && (
        <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
          <LazyModal
            onCloseButtonClick={onToggleDelModal}
            modalContent={LazyModalDelContent}
          />
        </Suspense>
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
            <Suspense
              fallback={<div className={styles.loading}>Loading...</div>}
            >
              <LazyCalendar data={store.data} columns={store.columns} />
            </Suspense>

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
            <label htmlFor="label">Set max employees in office</label>
            <input
              id="label"
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
            <Notice />
          </section>
        </>
      )}
    </div>
  );
};

export default memo(Root);
