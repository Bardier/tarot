import { FC } from 'react';

import styles from './About.module.scss';
import Link from 'next/link';

export const About: FC = () => {
  return <section className={`${styles.about} section`} id='about'>
    <div className='container'>
      <h2 className='section-title'>
        Про мене
      </h2>
      <p className={styles.about__text}>
        Мене звати Ольга і я кваліфікований <Link href='/blog/who-is-a-tarot-reader'
                                                  className={styles.about__link}>таролог</Link>.
      </p>
      <p className={styles.about__text}>
        Звернувшись до мене ви отримаєте професійну консультацію з відповідями на питання, які вас турбують.
        За допомогою <Link href='/' className={styles.about__link}>Таро</Link> я можу проаналізувати ваше життя,
        спрямувати
        ваші
        майбутні дії, вказати на помилки та вилікувати ваші душевні хвороби.
      </p>
      <p className={styles.about__text}>
        У своїй практиці послуговуюся знаннями з <Link href='/blog/numerology-the-secret-of-numbers'
                                                       className={styles.about__link}>нумерології</Link> та працюю
        з <Link
        href='/' className={styles.about__link}>Натальними картами</Link>. Використовую систему передбачень <Link
        href='/'
        className={styles.about__link}>Картами
        Ленорман</Link>, розроблену сумісно з нумерологією. Даю глибинний аналіз питань за допомогою <Link href='/'
                                                                                                           className={styles.about__link}>тактики
        78 дверей</Link>.
      </p>
      <p className={styles.about__text}>
        Я пропоную послуги з перегляду всіх сфер життя. Таких, як:
      </p>
      <ul className={styles.about__list}>
        <li className={styles.about__item}>
          <span className={styles.about__moon}></span>
          питання роботи, бізнесу, кар'єри, фінансів;
        </li>
        <li className={styles.about__item}>
          <span className={styles.about__moon}></span>
          питання, особистих взаємин між чоловіком і жінкою, партнерами, друзями, родичами тощо;
        </li>
        <li className={styles.about__item}>
          <span className={styles.about__moon}></span>
          питання, пов'язані з вибором (що краще вибрати, як краще вчинити);
        </li>
        <li className={styles.about__item}>
          <span className={styles.about__moon}></span>
          питання, пов'язані з самотністю, пошуком партнера;
        </li>
        <li className={styles.about__item}>
          <span className={styles.about__moon}></span>
          питання самореалізації, особисте духовне зростання;
        </li>
        <li className={styles.about__item}>
          <span className={styles.about__moon}></span>
          питання, пов'язані із зачаттям дитини;
        </li>
      </ul>
      <p className={styles.about__text}>
        виявлення причин подій, поради від карт, для поліпшення ситуації.
      </p>
      <p className={styles.about__text}>
        Пам'ятайте, що майбутнє мінливе та варіативне, а карти допоможуть знайти правильний шлях. <br />
        Я стану вашим порадником, який допоможе зрозуміти свої можливості та відшукати себе у житті. <br />
        Якщо вам потрібна допомога у розв'язання проблем або здійсненні змін в житті, радо відкриваю для вас свої двері!
      </p>
    </div>
  </section>;
};