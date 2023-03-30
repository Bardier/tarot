import {FC, useEffect, useRef} from "react";
import {Phone} from "../phone/Phone";
import './Article.scss'
import {useParams} from "react-router-dom";
import {dataBs} from "../../data-bs";


export const Article: FC = () => {
    const { articleId } = useParams();
    const articleWrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const article = dataBs.find(article => article.link === articleId);
        if (article && articleWrapperRef.current) {
            articleWrapperRef.current.innerHTML = `
                <img src="../.${article.img}" alt="${article.title}" class="article__img"/>
                <h1 class="article__title">
                    ${article.title}
                </h1>
                <div class="article__text">
                    ${article.text}
                </div>
            `
        }

    }, [])


    return <section className='article'>
        <div className="container">
            <div className="article__wrapper" >
                <div ref={articleWrapperRef}></div>
                <Phone text='Консультація таролога за номером'/>
            </div>

        </div>
    </section>
}