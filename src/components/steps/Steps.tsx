import {FC} from "react";

import './Steps.scss'

export const Steps: FC = () => {
    return <section className='steps section'>
        <div className="container">
            <h2 className='section-title'>
                Етапи моєї роботи
            </h2>
        </div>

            <ul className="steps__list">
                <li className="steps__item">
                    Первинна консультація
                </li>
                <li className="steps__item">
                    Проведення обряду
                </li>
                <li className="steps__item">
                    Подальша підтримка
                </li>
            </ul>
    </section>
}