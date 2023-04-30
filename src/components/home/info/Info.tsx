import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import phone from '../../../assets/img/info/phone.png';
import styles from './Info.module.scss';

export const Info: FC = () => {

  return <section className={styles.info}>
    <div className={`${styles.info__wrapper} container`}>
      <h1 className={styles.info__title}>Таролог Ольга</h1>
      <div className={styles.info__text}>
        Привороти. Обряди білої та чорної магії. Передбачення долі по фото.
        <p className='mobile-hide'>
          Ворожіння на сьогодні та майбутнє.
          <Link href='/blog/the-secret-of-program-candles' className={`${styles['info__text-link']} text-hover`}>Програмні
            свічки для
            різних сфер життя.</Link> Амулети.
        </p>
      </div>
      <a href='tel:+380507823854' className={`${styles.info__link} text-hover`}>
        +380 50 782 38 54
        <Image src={phone} alt='Phone' className={styles.info__phone} width={91} height={67} />
      </a>
    </div>
  </section>;
};