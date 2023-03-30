import {FC} from "react";
import Slider from "react-slick";
import './BlogSection.scss'
import {BlogCard} from "./blogCard/BlogCard";

import {dataBs} from "../../data-bs";

export const BlogSection: FC = () => {

    const dateDataBs = dataBs.filter((article) => {
        const currentDate = new Date();
        const articleDate = new Date(article.date.split('.').reverse().join('.'))
        return articleDate < currentDate
    })

    const renderBlogList = dateDataBs.map((article)=>{
        return <div key={article.id}>
            <div className='custom-slide' >
                <BlogCard {...article}/>
            </div>
        </div>
    })

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
                {renderBlogList}
            </Slider>
        </div>
    </section>
}