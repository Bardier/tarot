import { FC } from 'react';
import Slider from 'react-slick';
import loveImg from '../../../assets/img/consultation/consultation-1.jpg';
import moneyImg from '../../../assets/img/consultation/consultation-2.jpg';
import crisisImg from '../../../assets/img/consultation/consultation-3.jpg';
import styles from './Consultation.module.scss';
import Image from 'next/image';

export const Consultation: FC = () => {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return <section className='section'>
    <div className='container'>
      <h2 className='section-title'>
        Психологічне консультування за допомогою карт Таро
      </h2>
      <Slider {...settings}>
        <div>
          <div className={styles.consultation__slide}>
            <h3 className={styles.consultation__title}>
              Кохання. Відносини
            </h3>
            <Image src={loveImg} alt='Кохання. Відносини' className={styles.consultation__img} width={535}
                   height={320} />
            <ul className={styles.consultation__list}>
              <li className={styles.consultation__item}>
                Що людина про мене думає?
              </li>
              <li className={styles.consultation__item}>
                Що відчуває до мене?
              </li>
              <li className={styles.consultation__item}>
                Як ставиться до мене?
              </li>
              <li className={styles.consultation__item}>
                Які у нього плани на наші стосунки?
              </li>
              <li className={styles.consultation__item}>
                Перспективи розвитку існуючих відносин?
              </li>
              <li className={styles.consultation__item}>
                Чому не складаються стосунки?
              </li>
              <li className={styles.consultation__item}>
                Навіщо людина взагалі зустрілася
                на моєму життєвому шляху?
              </li>
              <li className={styles.consultation__item}>
                Чому не можу зустріти свою «половинку»
                та побудувати сім'ю?
              </li>
              <li className={styles.consultation__item}>
                Чому стосунки дали «тріщину» чи розпалися?
              </li>
              <li className={styles.consultation__item}>
                Чому люди ставляться до мене не так, як мені хотілося б?
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.consultation__slide}>
            <h3 className={styles.consultation__title}>
              Робота. Кар’єра. Гроші
            </h3>
            <Image src={moneyImg} alt='Робота. Кар’єра. Гроші' className={styles.consultation__img} width={535}
                   height={320} />
            <ul className={styles.consultation__list}>
              <li className={styles.consultation__item}>
                Йти з роботи чи ні?
              </li>
              <li className={styles.consultation__item}>
                Яку роботу вибрати?
              </li>
              <li className={styles.consultation__item}>
                Що мене чекає на цій роботі?
              </li>
              <li className={styles.consultation__item}>
                Чи отримаю я посаду, якщо ні, то чому?
              </li>
              <li className={styles.consultation__item}>
                Чи підвищать зарплату, якщо ні, то чому?
              </li>
              <li className={styles.consultation__item}>
                Чому не вдається заробити гроші/
                влаштуватися на роботу?
              </li>
              <li className={styles.consultation__item}>
                Чому не віддають борги?
              </li>
              <li className={styles.consultation__item}>
                Чому не складаються відносини в колективі?
              </li>
              <li className={styles.consultation__item}>
                Чому чіпляється начальник?
              </li>
              <li className={styles.consultation__item}>
                Чи варто брати кредит?
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.consultation__slide}>
            <h3 className={styles.consultation__title}>
              Вихід із кризових ситуацій
            </h3>
            <Image src={crisisImg} alt='Вихід із кризових ситуацій' className={styles.consultation__img} width={535}
                   height={320} />
            <ul className={styles.consultation__list}>
              <li className={styles.consultation__item}>
                Перегляд причин виникнення цих подій,
                рекомендації для виходу;
              </li>
              <li className={styles.consultation__item}>
                Питання, пов'язані з ситуаціями, що повторюються
                або погіршуються ;
              </li>
              <li className={styles.consultation__item}>
                Вибір найбільш сприятливого варіанту
                для виходу з кризи.
              </li>
            </ul>
          </div>
        </div>
      </Slider>
    </div>
  </section>;
};