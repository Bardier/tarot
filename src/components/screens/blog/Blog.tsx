import { FC } from 'react';
import Head from 'next/head';
import { BlogCard } from './blogCard/BlogCard';

import styles from './Blog.module.scss';
import { ArticleI } from '@/types/articleI';

interface BlogProps {
  data: ArticleI[];
}

const Blog: FC<BlogProps> = ({ data }) => {
  return <>
    <Head>
      <title>Блог</title>
      <meta name='description'
            content='Ласкаво прошу до мого блогу! Тут ви дізнаєтеся про тарологію та її потужний вплив на життя.' />
      <meta name='keywords'
            content='таролог, привороти, обряди, передбачення долі, Таро консультування, вихід з кризи, консультація таролога, гадание, ворожіння, магія, розклад Таро' />
    </Head>
    <section className={styles.blog}>
      <div className='container'>
        <div className={styles.blog__wrapper}>
          <h1 className={styles.blog__title}>
            Блог
          </h1>
          <p className={styles.blog__text}>
            Ласкаво прошу до мого блогу! Тут ви дізнаєтеся про тарологію та її потужний вплив на життя.
          </p>
          <ul className={styles.blog__list}>
            {data.map((article) => {
              return <li className={styles.blog__item} key={article.id}>
                <BlogCard {...article} />
              </li>;
            })}
          </ul>
        </div>
      </div>
    </section>
  </>;
};

export default Blog;

