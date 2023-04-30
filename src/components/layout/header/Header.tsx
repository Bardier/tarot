import { FC, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { animateScroll } from 'react-scroll';

import styles from './Header.module.scss';

const Header: FC = () => {
  const [isUp, setIsUp] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    setIsUp(scrollTop > 500);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target && document.body.classList.contains(styles['menu-open']) &&
        !target.closest(`.${styles['nav__toggle']}`)) {
        document.body.classList.remove(styles['menu-open']);
      }
    });
    return () => window.removeEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target && document.body.classList.contains(styles['menu-open']) &&
        !target.closest(`.${styles['nav__toggle']}`)) {
        document.body.classList.remove(styles['menu-open']);
      }
    });
    ;
  }, []);

  const menuHandler = () => {
    document.body.classList.toggle(styles['menu-open']);
  };

  const scrollToSection = (sectionName: string) => {
    setTimeout(() => {
      const target = document.querySelector(`#${sectionName}`);
      if (target) {
        animateScroll.scrollTo(target.getBoundingClientRect().top);
      }
    }, 200);
  };

  return <header className={styles.header}>
    <nav className={styles.nav}>
      <div className='container'>
        <ul className={`${styles.nav__list} nav__list`}>
          <li className={styles.nav__item}>
            <Link href='/' className={styles.nav__link}
                  onClick={() => scrollToSection('about')}
            >Про мене</Link>
          </li>
          <li className={styles.nav__item}>
            <Link href='/' className={styles.nav__link}
                  onClick={() => scrollToSection('services')}
            >Послуги</Link>
          </li>
          <li className={styles.nav__item}>
            <Link href='/' className={styles.nav__link}
                  onClick={() => scrollToSection('rites')}
            >Обряди</Link>
          </li>
          <li className={styles.nav__item}>
            <Link href='/blog' className={styles.nav__link}>Блог</Link>
          </li>
        </ul>
      </div>
      <div className={`${styles.nav__toggle} nav__toggle`}
           onClick={menuHandler}
      ><span></span></div>
    </nav>
    {isUp && <div className={styles.scrollTop}
                  onClick={() => animateScroll.scrollToTop()}
    >В гору
    </div>}
  </header>;
};

export default Header;