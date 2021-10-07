import React from 'react';

import { IModal } from './types';

import styles from './Modal.module.css';

const Modal: React.FC<IModal> = ({ onCloseButtonClick, modalContent }) => {
  const InnerComponent = modalContent;

  const onCloseClick = () => {
    onCloseButtonClick();
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <button type="button" onClick={onCloseClick} className={styles.button}>
          <span />
        </button>

        <InnerComponent onCloseClick={onCloseClick} />
      </div>
    </div>
  );
};

export default Modal;
