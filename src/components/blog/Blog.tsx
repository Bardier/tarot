import {FC} from "react";
import './Blog.scss';
import {BlogCard} from "../blogSection/blogCard/BlogCard";
import blogImg1 from '../../assets/img/blog/program-candles.jpg'


export const Blog: FC = () => {
    return <section className="blog">
        <div className="container">
            <h1 className="blog__title">
                Блог
            </h1>
            <p className="blog__text">
                Ласкаво прошу до мого блогу! Тут ви дізнаєтеся про тарологію та її потужний вплив на життя.
            </p>
            <ul className="blog__list">
                <li className="blog__item">
                    <BlogCard img={blogImg1} title='Програмні свічки: Секрет досягнення цілей' date='22 березня, 2023' text='Ви коли-небудь чули про програмні свічки? Це може звучати як щось фантастичне, але насправді ці свічки є потужним інструментом для...' link='/blog/1'/>
                </li>
                <li className="blog__item">
                    <BlogCard img={blogImg1} title='Програмні свічки: Секрет досягнення цілей' date='22 березня, 2023' text='Ви коли-небудь чули про програмні свічки? Це може звучати як щось фантастичне, але насправді ці свічки є потужним інструментом для...' link='/blog/1'/>
                </li>
                <li className="blog__item">
                    <BlogCard img={blogImg1} title='Програмні свічки: Секрет досягнення цілей' date='22 березня, 2023' text='Ви коли-небудь чули про програмні свічки? Це може звучати як щось фантастичне, але насправді ці свічки є потужним інструментом для...' link='/blog/1'/>
                </li>
                <li className="blog__item">
                    <BlogCard img={blogImg1} title='Програмні свічки: Секрет досягнення цілей' date='22 березня, 2023' text='Ви коли-небудь чули про програмні свічки? Це може звучати як щось фантастичне, але насправді ці свічки є потужним інструментом для...' link='/blog/1'/>
                </li>
                <li className="blog__item">
                    <BlogCard img={blogImg1} title='Програмні свічки: Секрет досягнення цілей' date='22 березня, 2023' text='Ви коли-небудь чули про програмні свічки? Це може звучати як щось фантастичне, але насправді ці свічки є потужним інструментом для...' link='/blog/1'/>
                </li>
                <li className="blog__item">
                    <BlogCard img={blogImg1} title='Програмні свічки: Секрет досягнення цілей' date='22 березня, 2023' text='Ви коли-небудь чули про програмні свічки? Це може звучати як щось фантастичне, але насправді ці свічки є потужним інструментом для...' link='/blog/1'/>
                </li>
            </ul>
        </div>
    </section>
}