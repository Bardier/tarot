import {FC, useState} from "react";
import {Link} from "react-router-dom";
import './Info.scss'
import phone from '../../assets/img/info/phone.png'

export const Info: FC = () => {
    const [messengers, setMessengers] = useState(false)

    const messengersHandler = () => {
        setMessengers(prev => !prev)
    }

    return <section className='info'>
        <div className="container info__wrapper">
        <h1 className='info__title'>Таролог Ольга</h1>
        <div className="info__text">
            Привороти. Обряди білої та чорної магії. Передбачення долі по фото.
            <p className='mobile-hide'>
                Ворожіння на сьогодні та майбутнє.
                <Link to='/blog/the-secret-of-program-candles' className='info__text-link text-hover'>Програмні свічки для різних сфер життя.</Link> Амулети.
            </p>
        </div>
        <a href='tel:+380507823854' className="info__link text-hover">
            +380 50 782 38 54
            <img src={phone} alt="phone" className='info__phone'/>
        </a>
        </div>
    </section>
}