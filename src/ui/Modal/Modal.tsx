import React from 'react';

import { IModal } from './types';

import styles from './Modal.module.css';

const Modal: React.FC<IModal> = ({ onCloseButtonClick }) => {
  const onCloseClick = () => {
    onCloseButtonClick();
  };
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <button type="button" onClick={onCloseClick}>
          <span />
        </button>
      </div>
    </div>
  );
};

export default Modal;
