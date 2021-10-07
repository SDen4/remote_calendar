import React from 'react';
import { useDispatch } from 'react-redux';
import { saveAllData } from '../../store/actions';

import Button from '../../ui/Button';

import { initialData } from '../../constants/table';

import { IModalDelContent } from './types';

import styles from './ModalDelContent.module.css';

const ModalDelContent: React.FC<IModalDelContent> = ({ onCloseClick }) => {
  const dispatch = useDispatch();
  const onCloseModalFunc = onCloseClick;

  const deleteHandler = () => {
    dispatch(saveAllData(initialData));
    localStorage.setItem('calendar', JSON.stringify(initialData));
    onCloseModalFunc();
  };

  const onCloseModal = () => {
    onCloseModalFunc();
  };

  return (
    <div className={styles.modalContent}>
      <h2>Are sure to delete all employees?</h2>

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

export default ModalDelContent;
