import {FC} from "react";
import errorImg from "../../assets/img/404.png";
import './Error.scss'
import {Link} from "react-router-dom";

export const Error: FC = () => {
    return <section className='section error'>
        <div className="container">
            <img src={errorImg} className='error__img' alt="Цієї сторінки не існує."/>
            <h1 className='error__title'>
                Сторінка не знайдена
            </h1>
            <div className="error__link-wrapper">
                <Link to='/' className='error__link'>На головну</Link>
            </div>
        </div>
    </section>
}