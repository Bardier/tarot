import {FC, useEffect, useRef, useState} from "react";
import {Phone} from "../phone/Phone";
import './Article.scss'
import {useParams} from "react-router-dom";
import {dataBs} from "../../data-bs";
import {SetMetaTags} from "../../SetMetaTags";
import {MetaTagsI} from "../../types/metaTagsI";


export const Article: FC = () => {
    const { articleId } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const articleWrapperRef = useRef<HTMLDivElement>(null)

    const [metaTags, setMetaTags] = useState<MetaTagsI>({
        title: '',
        description: '',
        keywords: ''
    });

    useEffect(() => {
        const article = dataBs.find(article => article.link === articleId);
        if (article && articleWrapperRef.current) {
            setMetaTags({
                keywords: article.keywords,
                title: article.title,
                description: article.description
            })
            articleWrapperRef.current.innerHTML = `
                <img src="../.${article.img}" alt="${article.caption}" class="article__img" width="420" height="280"/>
                <h1 class="article__title">
                    ${article.caption}
                </h1>
                <div class="article__text">
                    ${article.text}
                </div>
            `
        }
    }, [])


    return <section className='article'>
        <SetMetaTags {...metaTags}/>
        <div className="container">
            <div className="article__wrapper" >
                <div ref={articleWrapperRef}></div>
                <Phone text='Консультація таролога за номером'/>
            </div>

        </div>
    </section>
}