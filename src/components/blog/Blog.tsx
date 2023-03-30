import {FC} from "react";
import './Blog.scss';
import {BlogCard} from "../blogSection/blogCard/BlogCard";
import {dataBs} from "../../data-bs";


export const Blog: FC = () => {

    const dateDataBs = dataBs.filter((article) => {
        const currentDate = new Date();
        const articleDate = new Date(article.date.split('.').reverse().join('.'))
        return articleDate < currentDate
    })

    const renderBlogList = dateDataBs.map((article)=>{
        return <li className='blog__item' key={article.id}>
            <BlogCard {...article}/>
        </li>
    })

    return <section className="blog">
        <div className="container">
            <h1 className="blog__title">
                Блог
            </h1>
            <p className="blog__text">
                Ласкаво прошу до мого блогу! Тут ви дізнаєтеся про тарологію та її потужний вплив на життя.
            </p>
            <ul className="blog__list">
                {renderBlogList}
            </ul>
        </div>
    </section>
}