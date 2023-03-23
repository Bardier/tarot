import {FC, useEffect, useRef, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import { animateScroll } from 'react-scroll';
import './Header.scss'

export const Header:FC = () => {
    const menuBtnRef = useRef<HTMLButtonElement>(null)
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
            if(target && target !== menuBtnRef.current) {
                document.body.classList.remove('menu-open');
            }
        })

        return () => window.removeEventListener('click', ({target}) => {
            if(target && target !== menuBtnRef.current) {
                document.body.classList.remove('menu-open');
            }
        })
    }, [])

    const menuHandler = () => {
        document.body.classList.toggle('menu-open');
    }

    const scrollToSection = (sectionName: string) => {
        const target = document.querySelector(`#${sectionName}`)
        if(target) {
            animateScroll.scrollTo(target.getBoundingClientRect().top);
        }
    };

    return <header className='header'>
        <nav className='nav'>
            <ul className='container nav__list'>
                <li className='nav__item'>
                    <Link to='/' className='nav__link text-hover'
                          onClick={() => scrollToSection('about')}
                    >Про мене</Link>
                </li>
                <li className='nav__item'>
                    <Link to='/' className='nav__link text-hover'
                          onClick={() => scrollToSection('services')}
                    >Послуги</Link>
                </li>
                <li className='nav__item'>
                    <Link to='/' className='nav__link text-hover'
                          onClick={() => scrollToSection('rites')}
                    >Обряди</Link>
                </li>
                <li className='nav__item'>
                    <NavLink to='/blog' className='nav__link text-hover'>Блог</NavLink>
                </li>
            </ul>
            <button className='nav__toggle'
                    onClick={menuHandler}
                    ref={menuBtnRef}
            ><span></span></button>
        </nav>
        {isUp && <button className='scroll-top'
                         onClick={() => animateScroll.scrollToTop()}
        >В гору
        </button>}
    </header>
}