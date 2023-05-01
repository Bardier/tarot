import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
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


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = dataBs.map(({ link }) => ({
    params: { id: link.toString() },
  }));
  console.log('data: ', paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  if (!id) {
    return { notFound: true };
  }

  let data;
  dataBs.forEach(el => {
    if (el.link === id) {
      data = { ...el };
    }
  });

  if (!data) {
    return { notFound: true };
  }

  return {
    props: {
      data: data,
    },
  };
};
