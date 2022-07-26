import React, { memo } from 'react';

import styles from './styles.module.css';

const Notice: React.FC = () => {
  return (
    <>
      <h3>Notice</h3>

      <div className={styles.example_wrapper}>
        <div className={styles.example_item}>
          <div className={styles.examle_empty} />
          <span>office</span>
        </div>

        <div className={styles.example_item}>
          <div className={styles.examle_empty}>
            <div className={styles.examle_full} />
          </div>
          <span>remote</span>
        </div>
      </div>

      <p>
        You can change statuses of one employee in a few days at once by click
        holding &apos;Ctrl&apos; button for Windows and Linux or
        &apos;Command&apos; for MacOs
      </p>
    </>
  );
};

export default memo(Notice);
