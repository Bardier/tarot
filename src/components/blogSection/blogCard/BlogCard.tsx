import {FC} from "react";
import {Link} from "react-router-dom";

import './BlogCard.scss'

interface BlogCardProps {
    img: string;
    title: string;
    date: string;
    text: string;
    link: string;
}

export const BlogCard: FC<BlogCardProps> = ({img, text, title, date, link}) => {
    return <div className='blog-card'>
        <img src={img} alt={title} className="blog-card__img"/>
        <div className="blog-card__wrapper">
            <h3 className="blog-card__title">{title}</h3>
            <p className='blog-card__data'>{date}</p>
            <p className="blog-card__text">{text}</p>
            <Link to={link} className='blog-card__link'>Читати більше</Link>
        </div>
    </div>
}