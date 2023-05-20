import {FC, useEffect, useRef} from "react";
import {Link} from "react-router-dom";

import './BlogCard.scss'

interface BlogCardProps {
    img: string;
    caption: string;
    date: string;
    text: string;
    link: string;
}

export const BlogCard: FC<BlogCardProps> = ({img, text, caption, date, link}) => {

    const blogText = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        if(blogText.current) {
            blogText.current.innerHTML = text.substring(0, 200) + '...';
        }
    }, [])

    return <div className='blog-card'>
        <Link to={'/blog/' + link}>
            <img src={img} alt={caption} width={420} height={280} className="blog-card__img"/>
            <div className="blog-card__wrapper">
                <h3 className="blog-card__title">{caption}</h3>
                <p className='blog-card__data'>{date}</p>
                <p className="blog-card__text" ref={blogText}></p>
                <span className='blog-card__link'>Читати більше</span>
            </div>
        </Link>
    </div>
}