import {FC} from "react";
import {Blog} from "../components/blog/Blog";
import {SetMetaTags} from "../SetMetaTags";

export const BlogPage: FC = () => {
    const metaTags = {
        title: 'Блог',
        description: 'Ласкаво прошу до мого блогу! Тут ви дізнаєтеся про тарологію та її потужний вплив на життя.',
        keywords: 'таролог, привороти, обряди, передбачення долі, Таро консультування, вихід з кризи, консультація таролога, гадание, ворожіння, магія, розклад Таро',
    };
    return <>
        <SetMetaTags {...metaTags}/>
        <Blog/>
    </>
}