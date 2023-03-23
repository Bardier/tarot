import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/header/Header";
import {HomePage} from "./pages/HomePage";
import {BlogPage} from "./pages/BlogPage";
import {Footer} from "./components/footer/Footer";
import {ArticlePage} from "./pages/ArticlePage";
import './styles/style.scss'

export const App = () => {
  return (<>
        <Header/>
          <main className='main'>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:articleId" element={<ArticlePage />} />
              {/*<Route path="*" element={<Error />} />*/}
            </Routes>
          </main>
        <Footer/>
      </>
  );
}

