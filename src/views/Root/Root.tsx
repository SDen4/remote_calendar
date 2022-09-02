import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { AppStateType } from '../../store/RootReducer';
import { InitialStateType } from '../../store/types';

import {
  fetchSaga,
  setColumnsQuantity,
  setModalFlag,
} from '../../store/actions/actions';

import Button from '../../ui/Button';
import Loader from '../../components/Loader';
import Notice from '../../components/Notice';
import MaxEmployee from '../../components/MaxEmployee';
import columnGenerator from '../../components/Calendar/assets/columns';

import styles from './styles.module.css';

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

  useEffect(() => {
    dispatch(fetchSaga(store.data, store.maxValue, store.columnsQuantity));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const [delModal, setDelModal] = useState<boolean>(false);

  const onOpenModal = useCallback(() => {
    dispatch(setModalFlag(true));
  }, [dispatch]);

  const onCloseModal = useCallback(() => {
    dispatch(setModalFlag(false));
  }, [dispatch]);

  const onToggleDelModal = useCallback(() => {
    setDelModal(!delModal);
  }, [delModal]);

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
      className={styles.root}
      style={window.innerWidth < 480 ? { minHeight: appHeight } : {}}
    >
      <header>
        <h1>Remote Calendar</h1>
      </header>

      {store.loaderFlag ? (
        <Loader />
      ) : (
        <>
          {store.modalFlag && (
            <Suspense fallback={<Loader />}>
              <LazyModal
                onCloseButtonClick={onCloseModal}
                modalContent={LazyModalContent}
              />
            </Suspense>
          )}

          {delModal && (
            <Suspense fallback={<Loader />}>
              <LazyModal
                onCloseButtonClick={onToggleDelModal}
                modalContent={LazyModalDelContent}
              />
            </Suspense>
          )}

          <section className={clsx(styles.section, styles.buttons)}>
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
              <section className={clsx(styles.section, styles.calendar)}>
                <Suspense fallback={<Loader />}>
                  <LazyCalendar />
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

              <section className={clsx(styles.section, styles.sectionTotal)}>
                <span>Total employees:</span>
                <span>{store.data.length - 2}</span>
              </section>

              <section
                className={clsx(styles.section, styles.sectionMaxEmployees)}
              >
                <MaxEmployee />
              </section>

              <section className={clsx(styles.section, styles.sectionNotice)}>
                <Notice />
              </section>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Root;
