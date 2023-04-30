import { FC } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { Card } from '../card/Card';
import rites1 from '../../../assets/img/rites/rites-1.jpg';
import rites2 from '../../../assets/img/rites/rites-2.jpg';
import rites3 from '../../../assets/img/rites/rites-3.jpg';
import rites4 from '../../../assets/img/rites/rites-4.jpg';
import rites5 from '../../../assets/img/rites/rites-5.jpg';
import rites6 from '../../../assets/img/rites/rites-6.jpg';
import styles from './Rites.module.scss';
import service4 from '@/assets/img/services/service-4.jpg';

export const Rites: FC = () => {

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
  return <section className='section' id='rites'>
    <h2 className='section-title'>Обряди</h2>
    <div className={styles.rites__wrapper}>
      <div className='container'>
        <Slider {...settings}>
          <Card text='Обряд на продовження роду'>
            <Image src={rites4} alt='Обряд на продовження роду' width={300} height={460} />
          </Card>
          <Card text='Обряди на гроші, удачу та бізнес'>
            <Image src={rites5} alt='Обряди на гроші, удачу та бізнес' width={300} height={460} />
          </Card>
          <Card text='Церковні Обряди'>
            <Image src={rites1} alt='Церковні Обряди' width={300} height={460} />
          </Card>
          <Card text='Індивідуальний Обряд на Любов'>
            <Image src={rites2} alt='Індивідуальний Обряд на Любов' width={300} height={460} />
          </Card>
          <Card text='Обряди чорної магії - отримання бажаного'>
            <Image src={rites6} alt='Обряди чорної магії - отримання бажаного' width={300} height={460} />
          </Card>
          <Card text='Обряд вінчання'>
            <Image src={rites3} alt='Обряд вінчання' width={300} height={460} />
          </Card>
        </Slider>
      </div>
    </div>
  </section>;
};