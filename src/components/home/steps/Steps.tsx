import { FC } from 'react';

import styles from './Steps.module.scss';

export const Steps: FC = () => {
  return <section className={`${styles.steps} section`}>
    <div className='container'>
      <h2 className='section-title'>
        Етапи моєї роботи
      </h2>
    </div>

    <ul className={styles.steps__list}>
      <li className={styles.steps__item}>
        Первинна консультація
      </li>
      <li className={styles.steps__item}>
        Проведення обряду
      </li>
      <li className={styles.steps__item}>
        Подальша підтримка
      </li>
    </ul>
  </section>;
};