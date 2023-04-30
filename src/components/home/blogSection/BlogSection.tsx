import { FC } from 'react';
import Slider from 'react-slick';
import { BlogCard } from './blogCard/BlogCard';
import styles from './BlogSection.module.scss';

import { ArticleI } from '@/types/articleI';

interface BlogSectionProps {
  data: ArticleI[];
}


export const BlogSection: FC<BlogSectionProps> = ({ data }) => {


  const renderBlogList = data.map((article) => {
    return <div key={article.id}>
      <div className={`${styles['custom-slide']} custom-slide`}>
        <BlogCard {...article} />
      </div>
    </div>;
  });

  const settings = {
    className: 'center',
    centerMode: true,
    autoplay: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 840,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return <section className={`${styles['blog-section']} section`}>
    <div className={`${styles.container} container`}>
      <h2 className='section-title'>
        Блог
      </h2>
      <p className={styles['blog-section__text']}>
        Ласкаво прошу до мого блогу! Тут ви дізнаєтеся про тарологію та її потужний вплив на життя.
      </p>
      <Slider {...settings} className={styles['blog-section__slider']}>
        {renderBlogList}
      </Slider>
    </div>
  </section>;
};