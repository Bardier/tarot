import { FC } from 'react';
import { ArticleI } from '@/types/articleI';
import Phone from '@/components/phone/Phone';

import styles from './Article.module.scss';
import Head from 'next/head';
import Image from 'next/image';

interface ArticleProps {
  data: ArticleI;
}

export const Article: FC<ArticleProps> = ({ data }) => {
  const { img, caption, text } = data;
  return <>
    <Head>
      <title>{data.title}</title>
      <meta name='description' content={data.description} />
      <meta name='keywords' content={data.keywords} />
    </Head>
    <section className={styles.article}>
      <div className='container'>
        <div className={styles.article__wrapper}>
          <Image src={img} alt={caption} className={styles.article__img} width={450}
                 height={300} />
          <h1 className={styles.article__title}>{caption}</h1>
          <div className={styles.article__text} dangerouslySetInnerHTML={{ __html: text }}>
          </div>
          <Phone text='Консультація таролога за номером' />
        </div>

      </div>
    </section>
  </>;
};

