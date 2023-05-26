import {FC, useEffect, useRef, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import { animateScroll } from 'react-scroll';
import {ReactComponent as FacebookIcon} from "../../assets/img/icons/facebook.svg";
import {ReactComponent as AsideFacebookIcon} from "../../assets/img/icons/aside-facebook.svg";
import './Header.scss'

export const Header:FC = () => {
    const menuBtnRef = useRef<HTMLButtonElement>(null);
    const menuBtnSpanRef = useRef<HTMLSpanElement>(null);
    const [isUp, setIsUp] = useState(false);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        setIsUp(scrollTop > 500);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('click', ({target}) => {
            if(target && target !== menuBtnRef.current && target !== menuBtnSpanRef.current) {
                document.body.classList.remove('menu-open');
            }
        })

        return () => window.removeEventListener('click', ({target}) => {
            if(target && target !== menuBtnRef.current && target !== menuBtnSpanRef.current) {
                document.body.classList.remove('menu-open');
            }
        })
    }, [])

    const menuHandler = () => {
        document.body.classList.toggle('menu-open');
    }

    const scrollToSection = (sectionName: string) => {
        setTimeout(() => {
            const target = document.querySelector(`#${sectionName}`)
            if(target) {
                    animateScroll.scrollTo(target.getBoundingClientRect().top);
            }
        }, 200)
    };

    return <header className='header'>
        <nav className='nav'>
            <ul className='container nav__list'>
                <li className='nav__item'>
                    <Link to='/' className='nav__link '
                          onClick={() => scrollToSection('about')}
                    >Про мене</Link>
                </li>
                <li className='nav__item'>
                    <Link to='/' className='nav__link '
                          onClick={() => scrollToSection('services')}
                    >Послуги</Link>
                </li>
                <li className='nav__item'>
                    <Link to='/' className='nav__link '
                          onClick={() => scrollToSection('rites')}
                    >Обряди</Link>
                </li>
                <li className='nav__item'>
                    <NavLink to='/blog' className='nav__link '>Блог</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to='https://www.facebook.com/people/%D0%A2%D0%B0%D1%80%D0%BE%D0%BB%D0%BE%D0%B3-%D0%9E%D0%BB%D1%8C%D0%B3%D0%B0/100092397730608/' target='_blank' className='nav__link nav__link--facebook'><FacebookIcon/></NavLink>
                </li>
            </ul>
            <button className='nav__toggle'
                    onClick={menuHandler}
                    ref={menuBtnRef}
            ><span ref={menuBtnSpanRef}></span></button>
        </nav>
        {isUp && <>
            <NavLink to='https://www.facebook.com/people/%D0%A2%D0%B0%D1%80%D0%BE%D0%BB%D0%BE%D0%B3-%D0%9E%D0%BB%D1%8C%D0%B3%D0%B0/100092397730608/' target='_blank' className='aside-facebook scroll-top'><AsideFacebookIcon/></NavLink>
            <button className='scroll-top'
                    onClick={() => animateScroll.scrollToTop()}
            >В гору
            </button>
        </>}
    </header>
}