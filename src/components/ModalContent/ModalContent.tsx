import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../ui/Button';

import accessorDatesGenerator from '../../utils/accessorDatesGenerator';
import formatInputName from '../../utils/formatInputName';

import { addNewEmployee, setModalFlag } from '../../store/actions/actions';
import { dataSelect } from '../../store/selectors';

import styles from './styles.module.css';

const ModalContent: React.FC = () => {
  const dispatch = useDispatch();
  const ref: any = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const data = useSelector(dataSelect);

  const [name, setName] = useState<string>('');
  const [typeOfWork, setTypeOfWork] = useState<string>('office');
  const [validFlag, setValidFlag] = useState<boolean>(false);

  const onRadioClick = useCallback((type: string) => {
    setTypeOfWork(type);
  }, []);

  const onChangeNameHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValidFlag(false);
      setName(formatInputName(event.target.value));
    },
    [],
  );

  const onSubmitHahdler = useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();

      if (!name) {
        setValidFlag(true);
        return;
      }

      let namesArr: string[] = [];
      const re = /\s*,\s*/;
      const addArr = [];
      namesArr = name.split(re);

      for (let i = 0; i < namesArr.length; i++) {
        if (typeOfWork === 'office') {
          const newEmployee = { name: namesArr[i] };
          dispatch(addNewEmployee(newEmployee));
          addArr.push(newEmployee);
        }

        if (typeOfWork === 'remote') {
          const newEmployee = accessorDatesGenerator(new Date(), namesArr[i]);
          dispatch(addNewEmployee(newEmployee));
          addArr.push(newEmployee);
        }
      }

      localStorage.setItem(
        'calendar',
        JSON.stringify(addArr.reverse().concat(data)),
      );
      addArr.length = 0;

      dispatch(setModalFlag(false));
    },
    [data, dispatch, name, typeOfWork],
  );

  const onCloseModal = useCallback(() => {
    setName('');
    setTypeOfWork('office');
    dispatch(setModalFlag(false));
  }, [dispatch]);

  return (
    <div className={styles.modalContent}>
      <h2>Add a new employee</h2>

      <form onSubmit={onSubmitHahdler} className={styles.form}>
        <div className={styles.labelWrapper}>
          <label>Name: </label>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              onChange={onChangeNameHandler}
              ref={ref}
              value={name}
            />
            {validFlag && (
              <span className={styles.validationText}>
                The field can not be empty
              </span>
            )}
            {!name.includes(',') && !validFlag && (
              <span className={styles.noteText}>
                You can enter more than 1 employee separated by commas
              </span>
            )}
          </div>
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
