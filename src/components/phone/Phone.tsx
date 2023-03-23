import {FC, useEffect, useState} from "react";
import {Messengers} from "../messengers/Messengers";
import './Phone.scss'

interface PhoneProps {
    text: string
}

export const Phone: FC<PhoneProps> = ({text}) => {
    const [messengers, setMessengers] = useState(false)

    const messengersHandler = () => {
        setMessengers(prev => !prev)
    }

    return <section className='phone section'>
        <div className="container">
            <h2 className='section-title'>{text}</h2>
            <div className="phone__wrapper">
                <span className='phone__number text-hover' onClick={messengersHandler}>+380 50 782 38 54</span>
                {messengers && <Messengers />}
            </div>
        </div>
    </section>
}