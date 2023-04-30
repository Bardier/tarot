import { FC } from 'react';
import Head from 'next/head';
import { Info } from '@/components/home/info/Info';
import { About } from '@/components/home/about/About';
import Phone from '@/components/phone/Phone';
import { Steps } from '@/components/home/steps/Steps';
import { MyWork } from '@/components/home/myWork/MyWork';
import { Services } from '@/components/home/services/Services';
import { Rites } from '@/components/home/rites/Rites';
import { Consultation } from '@/components/home/consultation/Consultation';
import { BlogSection } from '@/components/home/blogSection/BlogSection';
import { ArticleI } from '@/types/articleI';


interface HomeProps {
  data: ArticleI[];
}

const Home: FC<HomeProps> = ({ data }) => {
  return <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>Консультація Таролога. Ворожіння на картах Таро онлайн та особисто.</title>
      <meta name='description'
            content="Ворожіння на сьогодні та майбутнє.🎴Передбачення долі по фото.📸Психологічне консультування.✨Вихід із кризових ситуацій.⌛Зняття привороту, порчі, наврочення.☯ Відновлення гармонії в сім'ї." />
      <meta name='keywords'
            content='таролог, привороти, обряди, передбачення долі, Таро консультування, вихід з кризи, консультація таролога, гадание, ворожіння, магія, розклад Таро' />
      <link
        rel='stylesheet'
        type='text/css'
        charSet='UTF-8'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
    </Head>
    <main>
      <Info />
      <About />
      <Phone text='Запис на консультацію за номером' />
      <Steps />
      <MyWork />
      <Phone text='Зв’яжіться зі мною прямо зараз' />
      <Services />
      <Phone text='Більше інформації за номером' />
      <Rites />
      <Phone text='Більше інформації за номером' />
      <Consultation />
      <BlogSection data={data} />
    </main>
  </>;
};

export default Home;