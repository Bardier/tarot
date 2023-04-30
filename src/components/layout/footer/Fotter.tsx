import { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return <footer className={styles.footer}>
    <p className={styles.footer__text}>
      Всі права захищенні @ 2023 Ольга
    </p>
  </footer>;
};

export default Footer;