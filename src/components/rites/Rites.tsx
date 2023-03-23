import {FC} from "react";
import Slider from "react-slick";
import {Card} from "../card/Card";
import rites1 from '../../assets/img/rites/rites-1.jpg'
import rites2 from '../../assets/img/rites/rites-2.jpg'
import rites3 from '../../assets/img/rites/rites-3.jpg'
import rites4 from '../../assets/img/rites/rites-4.jpg'
import rites5 from '../../assets/img/rites/rites-5.jpg'
import rites6 from '../../assets/img/rites/rites-6.jpg'
import './Rites.scss'

export const Rites: FC = () => {

    const settings = {
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return <section className='section rites' id='rites'>
        <h2 className='section-title'>Обряди</h2>
        <div className="rites__wrapper">
            <div className="container">
                <Slider {...settings}>
                    <Card text='Обряд на продовження роду' imgSrc={rites4}/>
                    <Card text='Обряди на гроші, удачу та бізнес' imgSrc={rites5}/>
                    <Card text='Церковні Обряди' imgSrc={rites1}/>
                    <Card text='Індивідуальний Обряд на Любов' imgSrc={rites2}/>
                    <Card text='Обряди чорної магії - отримання бажаного' imgSrc={rites6}/>
                    <Card text='Обряд вінчання' imgSrc={rites3}/>
                </Slider>
            </div>
        </div>
    </section>
}