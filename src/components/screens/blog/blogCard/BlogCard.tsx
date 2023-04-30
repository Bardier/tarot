import React, { FC, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './BlogCard.module.scss';

interface BlogCardProps {
  img: string;
  caption: string;
  date: string;
  text: string;
  link: string;
}

export const BlogCard: FC<BlogCardProps> = ({ img, text, caption, date, link }) => {
  return <div className={styles.blogCard}>
    <Link href={'/blog/' + link}>
      <Image
        src={img}
        alt={caption}
        className={styles.blogCard__img}
        width={406}
        height={270}
        priority
      />
      <div className={styles.blogCard__wrapper}>
        <h3 className={styles.blogCard__title}>{caption}</h3>
        <p className={styles.blogCard__data}>{date}</p>
        <div className={styles.blogCard__text}
             dangerouslySetInnerHTML={{ __html: text.substring(0, 200) + '...' }}></div>
        <span className={styles.blogCard__link}>Читати більше</span>
      </div>
    </Link>
  </div>;
};