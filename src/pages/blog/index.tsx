import { NextPage } from 'next';
import Blog from '@/components/screens/blog/Blog';
import { dataBs } from '@/data-bs';
import { ArticleI } from '@/types/articleI';

interface BlogPageProps {
  data: ArticleI[];
}

const BlogPage: NextPage<BlogPageProps> = ({ data }) => {
  return <Blog data={data} />;
};

export default BlogPage;

export async function getStaticProps() {
  const data = dataBs.filter((article) => {
    const currentDate = new Date();
    const articleDate = new Date(article.date.split('.').reverse().join('.'));
    return articleDate < currentDate;
  });

  return {
    props: {
      data,
    },
  };
}