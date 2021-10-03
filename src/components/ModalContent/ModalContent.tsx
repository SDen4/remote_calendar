import React from 'react';
import Button from '../../ui/Button';

import styles from './ModalContent.module.css';

const ModalContent: React.FC = () => {
  const onSubmitHahdler = () => {
    return null;
  };

  const onRadioClick = (event: any) => {
    // eslint-disable-next-line no-console
    console.log(event.target.value);
    return null;
  };

  return (
    <div className={styles.modalContent}>
      <h2>Add a new eployee</h2>

      <form onSubmit={onSubmitHahdler} className={styles.form}>
        <div className={styles.labelWrapper}>
          <label>Name: </label>
          <input type="text" />
        </div>

        <div className={styles.labelWrapper}>
          <label>Place of work:</label>

          <div className={styles.radioWrapper}>
            <div>
              <label>office</label>
              <input
                type="radio"
                name="radio"
                value="office"
                onClick={(event) => onRadioClick(event)}
              />
            </div>

            <div>
              <label>remote</label>
              <input
                type="radio"
                name="radio"
                value="remote"
                onClick={(event) => onRadioClick(event)}
              />
            </div>
          </div>
        </div>
      </form>

      <Button buttonText="Add" buttonType="submit" onButtonClick={() => null} />
    </div>
  );
};

export default ModalContent;
