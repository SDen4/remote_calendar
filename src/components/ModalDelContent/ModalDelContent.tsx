import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../ui/Button';

import {
  fetchSaga,
  saveAllData,
  saveFirstRangeDate,
  setColumnsQuantity,
} from '../../store/actions/actions';

import { initialData } from '../../constants/table';

import styles from './styles.module.css';

interface IProps {
  onCloseClick?: any;
}

const ModalDelContent: React.FC<IProps> = ({ onCloseClick }) => {
  const dispatch = useDispatch();
  const onCloseModalFunc = onCloseClick;

  const deleteHandler = () => {
    dispatch(saveFirstRangeDate(new Date()));
    localStorage.setItem('firstRangeDate', String(new Date()));

    dispatch(saveAllData(initialData));
    localStorage.setItem('calendar', JSON.stringify(initialData));

    localStorage.setItem('columnsQuantity', '90');
    dispatch(setColumnsQuantity(90));
    dispatch(fetchSaga(initialData, 1, 90));

    onCloseModalFunc();
  };

  const onCloseModal = () => {
    onCloseModalFunc();
  };

  return (
    <div className={styles.modalContent}>
      <h2>Are you sure to delete all employees?</h2>

      <div className={styles.buttons_wrapper}>
        <Button
          buttonText="Delete"
          buttonType="button"
          onButtonClick={deleteHandler}
        />

        <Button
          buttonText="Cancel"
          buttonType="button"
          onButtonClick={onCloseModal}
          stylesButton={styles.deleteButton}
        />
      </div>
    </div>
  );
};

export default memo(ModalDelContent);
