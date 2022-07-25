/* eslint-disable react/button-has-type */
import React, { memo } from 'react';
import clsx from 'clsx';

import { IButton } from './types';

import styles from './Button.module.css';

const Button: React.FC<IButton> = ({
  buttonText,
  buttonType,
  onButtonClick,
  stylesButton,
  disabled,
}) => {
  return (
    <button
      type={buttonType}
      aria-label={buttonText}
      onClick={onButtonClick}
      className={clsx(styles.button, stylesButton)}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default memo(Button);
