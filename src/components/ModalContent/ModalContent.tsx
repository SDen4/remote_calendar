import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addNewEmployee, setModalFlag } from '../../store/actions';

import Button from '../../ui/Button';

import accessorDatesGenerator from '../../utils/accessorDatesGenerator';

import styles from './ModalContent.module.css';

const ModalContent: React.FC = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState<string>('');
  const [typeOfWork, setTypeOfWork] = useState<string>('office');

  const onRadioClick = (type: string) => {
    setTypeOfWork(type);
  };

  const onChangeNameHandler = (event: any) => {
    setName(event.target.value);
  };

  const onSubmitHahdler = () => {
    if (typeOfWork === 'office') {
      const newEmployee = { name };
      dispatch(addNewEmployee(newEmployee));
    }

    if (typeOfWork === 'remote') {
      const newEmloyee = accessorDatesGenerator(new Date(), name);
      dispatch(addNewEmployee(newEmloyee));
    }

    dispatch(setModalFlag(false));
  };

  return (
    <div className={styles.modalContent}>
      <h2>Add a new eployee</h2>

      <form onSubmit={onSubmitHahdler} className={styles.form}>
        <div className={styles.labelWrapper}>
          <label>Name: </label>
          <input type="text" onChange={onChangeNameHandler} />
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

      <Button
        buttonText="Add"
        buttonType="submit"
        onButtonClick={onSubmitHahdler}
      />
    </div>
  );
};

export default ModalContent;
