import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

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
import {
  columnsQuantitySelect,
  dataSelect,
  firstRangeDateSelect,
  loaderFlagSelect,
  maxValueSelect,
  modalFlagSelect,
} from '../../store/selectors';

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

  const columnsQuantity = useSelector(columnsQuantitySelect);
  const data = useSelector(dataSelect);
  const firstRangeDate = useSelector(firstRangeDateSelect);
  const loaderFlag = useSelector(loaderFlagSelect);
  const maxValue = useSelector(maxValueSelect);
  const modalFlag = useSelector(modalFlagSelect);

  useEffect(() => {
    dispatch(fetchSaga(data, maxValue, columnsQuantity));
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
    return columnGenerator(firstRangeDate, maxValue, 90);
  }, [firstRangeDate, maxValue]);

  const addPeriodHandler = useCallback(() => {
    const newColumnsQuantity = columnsQuantity + 90;
    localStorage.setItem('columnsQuantity', String(newColumnsQuantity));
    dispatch(setColumnsQuantity(newColumnsQuantity));
    dispatch(fetchSaga(data, maxValue, newColumnsQuantity));
  }, [dispatch, columnsQuantity, data, maxValue]);

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

      {loaderFlag ? (
        <Loader />
      ) : (
        <>
          {modalFlag && (
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

            {data.length > 2 && (
              <Button
                buttonText={
                  data.length === 3 ? 'Delete employee' : 'Delete all employees'
                }
                buttonType="button"
                onButtonClick={onToggleDelModal}
                stylesButton={clsx(
                  styles.deleteButton,
                  data.length <= 2 && styles.disabledButton,
                )}
                disabled={data.length <= 2}
              />
            )}
          </section>

          {data.length > 2 && (
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
                <span>{data.length - 2}</span>
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
