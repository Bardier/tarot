import {FC} from "react";
import {Error} from "../components/error/Error";
import {SetMetaTags} from "../SetMetaTags";

export const ErrorPage: FC = () => {
    const metaTags = {
        title: '404 Сторінка не знайдена | Консультація Таролога',
        description: 'Сторінка не знайдена. Будь ласка, поверніться на головну сторінку.',
        keywords: 'сторінку не знайдено, 404, помилка',
    };
    return <>
        <SetMetaTags {...metaTags}/>
        <Error/>
    </>
}

