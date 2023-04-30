import { FC, useState } from 'react';
import Messengers from '@/components/messengers/Messengers';
import styles from './Phone.module.scss';

interface PhoneProps {
  text: string;
}

const Phone: FC<PhoneProps> = ({ text }) => {
  const [messengers, setMessengers] = useState(false);

  const messengersHandler = () => {
    setMessengers(prev => !prev);
  };

  return <section className={`${styles.phone} section`}>
    <div className='container'>
      <h2 className='section-title'>{text}</h2>
      <div className={styles.phone__wrapper}>
        <span className={`${styles.phone__number} text-hover`} onClick={messengersHandler}>+380 50 782 38 54</span>
        {messengers && <Messengers />}
      </div>
    </div>
  </section>;
};

export default Phone;