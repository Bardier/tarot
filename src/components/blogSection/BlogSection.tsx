import {FC} from "react";
import Slider from "react-slick";
import './BlogSection.scss'
import {BlogCard} from "./blogCard/BlogCard";

import blogImg1 from '../../assets/img/blog/program-candles.jpg'

export const BlogSection: FC = () => {
    const settings = {
        className: "center",
        centerMode: true,
        autoplay: true,
        infinite: true,
        centerPadding: "60px",
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
                }
            },
        ]
    };
    return <section className='section blog-section'>
        <div className="container">
            <h2 className="section-title">
                Блог
            </h2>
            <p className="blog-section__text">
                Ласкаво прошу до мого блогу! Тут ви дізнаєтеся про тарологію та її потужний вплив на життя.
            </p>
            <Slider {...settings} className='blog-section__slider'>
                <div>
                    <div className='custom-slide'>
                        <BlogCard img={blogImg1} title='Програмні свічки: Секрет досягнення цілей' date='22 березня, 2023' text='Ви коли-небудь чули про програмні свічки? Це може звучати як щось фантастичне, але насправді ці свічки є потужним інструментом для...' link='/'/>
                    </div>
                </div>
                <div>
                    <div className='custom-slide'>
                        <BlogCard img={blogImg1} title='Програмні свічки: Секрет досягнення цілей' date='22 березня, 2023' text='Ви коли-небудь чули про програмні свічки? Це може звучати як щось фантастичне, але насправді ці свічки є потужним інструментом для...' link='/'/>
                    </div>
                </div>
                <div>
                    <div className='custom-slide'>
                        <BlogCard img={blogImg1} title='Програмні свічки: Секрет досягнення цілей' date='22 березня, 2023' text='Ви коли-небудь чули про програмні свічки? Це може звучати як щось фантастичне, але насправді ці свічки є потужним інструментом для...' link='/'/>
                    </div>
                </div>
                <div>
                    <div className='custom-slide'>
                        <BlogCard img={blogImg1} title='Програмні свічки: Секрет досягнення цілей' date='22 березня, 2023' text='Ви коли-небудь чули про програмні свічки? Це може звучати як щось фантастичне, але насправді ці свічки є потужним інструментом для...' link='/'/>
                    </div>
                </div>
                <div>
                    <div className='custom-slide'>
                        <BlogCard img={blogImg1} title='Програмні свічки: Секрет досягнення цілей' date='22 березня, 2023' text='Ви коли-небудь чули про програмні свічки? Це може звучати як щось фантастичне, але насправді ці свічки є потужним інструментом для...' link='/'/>
                    </div>
                </div>
            </Slider>
        </div>
    </section>
}