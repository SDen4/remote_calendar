import React from 'react';
import clsx from 'clsx';

import Calendar from '../../components/Calendar';

import styles from './Root.module.css';

const Root: React.FC = () => {
  return (
    <div className={styles.root_wrapper}>
      <header>
        <h1>Remote Calendar</h1>
      </header>

      <section
        className={clsx(styles.section_wrapper, styles.calendar_wrapper)}
      >
        <Calendar />
      </section>
    </div>
  );
};

export default Root;
