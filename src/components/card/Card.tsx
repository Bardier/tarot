import {FC} from "react";
import './Card.scss'

interface CardProps {
    text: string;
    imgSrc: string;
}

export const Card: FC<CardProps> = ({imgSrc,text}) => {
    return <div className='card'>
        <img src={imgSrc} alt={text} className='card__img'/>
        <p className="card__text">{text}</p>
    </div>
}