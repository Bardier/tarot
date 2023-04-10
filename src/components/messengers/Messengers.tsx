import {FC, useEffect} from "react";
import {ReactComponent as PhoneIcon} from "../../assets/img/icons/phone.svg";
import {ReactComponent as ViberIcon} from "../../assets/img/icons/viber.svg";
import {ReactComponent as TelegramIcon} from "../../assets/img/icons/telegram.svg";
import {ReactComponent as WhatsAppIcon} from "../../assets/img/icons/whatsapp.svg";

import './Messengers.scss'

export const Messengers: FC = () => {

    return <div className='messengers'>
        <ul className="messengers__list">
            <li className="messengers__item">
                <a href='tel:+380507823854'><PhoneIcon/></a>
            </li>
            <li className="messengers__item">
                <a href="viber://chat?number=%2B380507823854"><ViberIcon/></a>
            </li>
            <li className="messengers__item">
                <a href="tg://addcontact?phone=507823854" target="_blank"><TelegramIcon/></a>
            </li>
            <li className="messengers__item">
                <a href="whatsapp://send?phone=+380507823854" target="_blank"><WhatsAppIcon/></a>
            </li>
        </ul>
    </div>
}