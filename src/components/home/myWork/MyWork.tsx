import { FC } from 'react';

import styles from './MyWork.module.scss';

export const MyWork: FC = () => {
  return <section className={`${styles.myWork} section`}>
    <div className='container'>
      <h2 className='section-title'>
        Як я працюю?
      </h2>
      <ul className={styles['my-work__list']}>
        <li className={styles['my-work__item']}>
          Для проведення консультації мені необхідно знати ваше ім'я та знак зодіаку. Якщо питання про стосунки, то
          додатково є ім'я та знак зодіаку вашого партнера.
        </li>
        <li className={styles['my-work__item']}>
          Прийом проводжу з урахуванням Жіночих та Чоловічих днів.
        </li>
        <li className={styles['my-work__item']}>
          Привороти, обряди замовляються на відстані. По фото, імені, даті народження.
          Матеріали, які потрібні будуть вам для активації ритуалів, я передаю поштою.
        </li>
        <li className={styles['my-work__item']}>
          Результат гарантовано. Робота тільки після повної оплати. Тому, що роблю насамперед відкуп перед проведенням
          будь-якого ритуалу, для вашої безпеки й гарного результату.
        </li>
        <li className={styles['my-work__item']}>
          Не чекайте, примарного розв'язання проблеми. Не витрачайте дорогоцінний час!
        </li>
      </ul>
    </div>
  </section>;
};