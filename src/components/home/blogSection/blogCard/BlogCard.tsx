import { FC } from 'react';
import Link from 'next/link';

import styles from './BlogCard.module.scss';
import Image from 'next/image';

interface BlogCardProps {
  img: string;
  caption: string;
  date: string;
  text: string;
  link: string;
}

export const BlogCard: FC<BlogCardProps> = ({ img, text, caption, date, link }) => {

  return <div className={styles['blog-card']}>
    <Link href={'/blog/' + link}>
      <Image src={img} alt={caption} className={styles['blog-card__img']} width={350} height={233} />
      <div className={styles['blog-card__wrapper']}>
        <h3 className={styles['blog-card__title']}>{caption}</h3>
        <p className={styles['blog-card__data']}>{date}</p>
        <div className={styles['blog-card__text']}
             dangerouslySetInnerHTML={{ __html: text.substring(0, 200) + '...' }}></div>
        <span className={styles['blog-card__link']}>Читати більше</span>
      </div>
    </Link>
  </div>;
};