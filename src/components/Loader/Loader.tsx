import React from 'react';

import styles from './styles.module.css';

const Loader: React.FC = () => {
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

export default Loader;
