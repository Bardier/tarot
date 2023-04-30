import Home from '@/components/screens/home/Home';
import { dataBs } from '@/data-bs';
import { ArticleI } from '@/types/articleI';
import { NextPage } from 'next';

interface HomePageProps {
  data: ArticleI[];
}

const HomePage: NextPage<HomePageProps> = ({ data }) => {
  return <Home data={data} />;
};

export default HomePage;

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