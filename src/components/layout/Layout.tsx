import { FC, PropsWithChildren } from 'react';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Fotter';
import Head from 'next/head';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <Header />
    {children}
    <Footer />
  </>;
};

export default Layout;