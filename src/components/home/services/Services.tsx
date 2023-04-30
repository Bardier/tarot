import { FC } from 'react';
import Slider from 'react-slick';
import { Card } from '../card/Card';
import service1 from '../../../assets/img/services/service-1.jpg';
import service2 from '../../../assets/img/services/service-2.jpg';
import service3 from '../../../assets/img/services/service-3.jpg';
import service4 from '../../../assets/img/services/service-4.jpg';
import service5 from '../../../assets/img/services/service-5.jpg';
import styles from './Services.module.scss';
import Image from 'next/image';
import Head from 'next/head';

export const Services: FC = () => {

  const settings = {
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return <section className='section' id='services'>
    <h2 className='section-title'>Послуги</h2>
    <div className={styles.services__wrapper}>
      <div className='container'>
        <Slider {...settings}>
          <Card text='Ворожіння на картах Таро'>
            <Image src={service4} alt='Ворожіння на картах Таро' width={300} height={460} />
          </Card>
          <Card text='Приворот і любовна магія'>
            <Image src={service1} alt='Приворот і любовна магія' width={300} height={460} />
          </Card>
          <Card text='Зняття привороту, порчі, наврочення'>
            <Image src={service5} alt='Зняття привороту, порчі, наврочення' width={300} height={460} />
          </Card>
          <Card text='Проведення ритуалу відкупу і очищення від гріха'>
            <Image src={service2} alt='Проведення ритуалу відкупу і очищення від гріха' width={300} height={460} />
          </Card>
          <Card text='Передбачення долі по фото'>
            <Image src={service4} alt='Передбачення долі по фото' width={300} height={460} />
          </Card>
          <Card text='Магічний захист'>
            <Image src={service3} alt='Магічний захист' width={300} height={460} />
          </Card>
        </Slider>
      </div>
    </div>
  </section>;
};