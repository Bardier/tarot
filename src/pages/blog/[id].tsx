import { NextPage } from 'next';
import { dataBs } from '@/data-bs';
import { Article } from '@/components/screens/article/Article';
import { ArticleI } from '@/types/articleI';

interface ArticlePageProps {
  data: ArticleI;
}

const ArticlePage: NextPage<ArticlePageProps> = ({ data }) => {
  return <Article data={data} />;
};

export default ArticlePage;

interface PropsI {
  params: {
    id: string
  };
}

export async function getServerSideProps({ params }: PropsI) {
  const data = dataBs.find(article => article.link === params.id);

  return {
    props: {
      data,
    },
  };
}