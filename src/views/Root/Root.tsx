import React from 'react';
import Calendar from '../Calendar';

import styles from './Root.module.css';

const Root: React.FC = () => {
  return (
    <div className={styles.root_wrapper}>
      <header>
        <h1>Remote Calendar</h1>
      </header>

      <section className={styles.section_wrapper}>
        <Calendar />
      </section>
    </div>
  );
};

export default Root;
