import React from 'react';

import styles from './styles.module.css';

export const Loader: React.FC = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.ldsDefault}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
