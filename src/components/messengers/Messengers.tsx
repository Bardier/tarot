import { FC } from 'react';
import Image from 'next/image';
import phoneIcon from '../../assets/img/icons/phone.svg';
import viberIcon from '../../assets/img/icons/viber.svg';
import telegramIcon from '../../assets/img/icons/telegram.svg';
import whatsAppIcon from '../../assets/img/icons/whatsapp.svg';

import styles from './Messengers.module.scss';

const Messengers: FC = () => {

  return <div className={styles.messengers}>
    <ul className={styles.messengers__list}>
      <li className={styles.messengers__item}>
        <a href='tel:+380507823854'>
          <Image src={phoneIcon} alt='Phone icon' width='40' height='40' />
        </a>
      </li>
      <li className={styles.messengers__item}>
        <a href='viber://chat?number=%2B380507823854'>
          <Image src={viberIcon} alt='Viber icon' width='40' height='40' />
        </a>
      </li>
      <li className={styles.messengers__item}>
        <a href='tg://addcontact?phone=507823854' target='_blank'>
          <Image src={telegramIcon} alt='Telegram icon' width='40' height='40' />
        </a>
      </li>
      <li className={styles.messengers__item}>
        <a href='whatsapp://send?phone=+380507823854' target='_blank'>
          <Image src={whatsAppIcon} alt='WhatsUp icon' width='40' height='40' />
        </a>
      </li>
    </ul>
  </div>;
};

export default Messengers;