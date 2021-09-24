/* eslint-disable react/button-has-type */
import React from 'react';
import clsx from 'clsx';

import { IButton } from './types';

import styles from './Button.module.css';

const Button: React.FC<IButton> = ({
  buttonText,
  buttonType,
  onButtonClick,
  stylesButton,
}) => {
  return (
    <button
      type={buttonType}
      onClick={onButtonClick}
      className={clsx(styles.button, stylesButton)}
    >
      {buttonText}
    </button>
  );
};

export default Button;
