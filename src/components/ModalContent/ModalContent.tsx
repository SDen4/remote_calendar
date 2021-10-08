import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewEmployee, setModalFlag } from '../../store/actions';
import { AppStateType } from '../../store/RootReducer';
import { IData } from '../../store/types';

import Button from '../../ui/Button';

import accessorDatesGenerator from '../../utils/accessorDatesGenerator';

import styles from './ModalContent.module.css';

const ModalContent: React.FC = () => {
  const dispatch = useDispatch();
  const ref: any = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const data = useSelector<AppStateType, IData[]>(
    (store) => store.reducer.data,
  );

  const [name, setName] = useState<string>('');
  const [typeOfWork, setTypeOfWork] = useState<string>('office');

  const onRadioClick = (type: string) => {
    setTypeOfWork(type);
  };

  const onChangeNameHandler = (event: any) => {
    setName(event.target.value.trim());
  };

  const onSubmitHahdler = () => {
    if (!name) {
      return;
    }

    if (typeOfWork === 'office') {
      const newEmployee = { name };
      dispatch(addNewEmployee(newEmployee));
      localStorage.setItem('calendar', JSON.stringify([newEmployee, ...data]));
    }

    if (typeOfWork === 'remote') {
      const newEmployee = accessorDatesGenerator(new Date(), name);
      dispatch(addNewEmployee(newEmployee));
      localStorage.setItem('calendar', JSON.stringify([newEmployee, ...data]));
    }

    dispatch(setModalFlag(false));
  };

  const onCloseModal = () => {
    setName('');
    setTypeOfWork('office');
    dispatch(setModalFlag(false));
  };

  return (
    <div className={styles.modalContent}>
      <h2>Add a new employee</h2>

      <form onSubmit={onSubmitHahdler} className={styles.form}>
        <div className={styles.labelWrapper}>
          <label>Name: </label>
          <input type="text" onChange={onChangeNameHandler} ref={ref} />
        </div>

        <div className={styles.labelWrapper}>
          <label>Place of work:</label>

          <div className={styles.radioWrapper}>
            <div>
              <label>office</label>
              <input
                type="radio"
                name="radio"
                value={typeOfWork}
                defaultChecked
                onClick={() => onRadioClick('office')}
              />
            </div>

            <div>
              <label>remote</label>
              <input
                type="radio"
                name="radio"
                value={typeOfWork}
                onClick={() => onRadioClick('remote')}
              />
            </div>
          </div>
        </div>
      </form>

      <div className={styles.buttons_wrapper}>
        <Button
          buttonText="Add"
          buttonType="submit"
          onButtonClick={onSubmitHahdler}
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

export default ModalContent;
