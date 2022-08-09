import React, { memo } from 'react';

import styles from './Modal.module.css';

interface IProps {
  onCloseButtonClick: () => void;
  modalContent: any;
  onCloseClick?: () => void;
}

const Modal: React.FC<IProps> = ({ onCloseButtonClick, modalContent }) => {
  const InnerComponent = modalContent;

  const onCloseClick = () => {
    onCloseButtonClick();
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <button
          type="button"
          onClick={onCloseClick}
          className={styles.button}
          aria-label="Close Button"
        >
          <span />
        </button>

        <InnerComponent onCloseClick={onCloseClick} />
      </div>
    </div>
  );
};

export default memo(Modal);
