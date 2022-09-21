import React, { memo } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

interface IProps {
  buttonText: string;
  buttonType: 'button' | 'submit' | 'reset';
  onButtonClick?: (event: React.SyntheticEvent) => void;
  stylesButton?: string;
  disabled?: boolean;
}

export const Button: React.FC<IProps> = memo(
  ({ buttonText, buttonType, onButtonClick, stylesButton, disabled }) => {
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
  },
);
