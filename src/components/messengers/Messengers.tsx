import {FC, useEffect} from "react";
import {Link} from "react-router-dom";
import {ReactComponent as PhoneIcon} from "../../assets/img/icons/phone.svg";
import {ReactComponent as ViberIcon} from "../../assets/img/icons/viber.svg";
import {ReactComponent as TelegramIcon} from "../../assets/img/icons/telegram.svg";

import './Messengers.scss'

export const Messengers: FC = () => {

    return <div className='messengers'>
        <ul className="messengers__list">
            <li className="messengers__item">
                <Link to='tel:+380507823854'><PhoneIcon/></Link>
            </li>
            <li className="messengers__item">
                <Link to='viber://chat?number=+380507823854' target="_blank"><ViberIcon/></Link>
            </li>
            <li className="messengers__item">
                <Link to="https://t.me/+380507823854" target="_blank"><TelegramIcon/></Link>
            </li>
        </ul>
    </div>
}