import { FC, ReactNode } from 'react';
import styles from './Card.module.scss';

interface CardProps {
  text: string;
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ text, children }) => {
  return <div className={styles.card}>
    {children}
    <p className={styles.card__text}>{text}</p>
  </div>;
};