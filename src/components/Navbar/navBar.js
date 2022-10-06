import React, { useEffect, useState } from 'react';
import './../Navbar/navBar.scss';
import { Fade as Hamburger } from 'hamburger-react';
import { BrowserRouter, Link } from 'react-router-dom';
import ioMdClose from 'react-icons';
import { BiShoppingBag } from "react-icons/bi"
import about from '../../pages/About/about';
import contact from '../contact/contact';
import shop from '../../pages/Shop/shop';

import { useLocation } from 'react-router-dom';
export default function Navbar({cart}) {
   
   
    const [isOpen, setOpen] = useState(false)

    const closeMenu = () => {
        setOpen(false)
    }
    return (
        <header className='nav'>
            <nav className='navBar'>

                <Hamburger size={25} color="#101010" direction="left" easing="ease-in" toggled={isOpen} toggle={setOpen} />

                <Link to='/' className='navBar__logo'> SIKA</Link>
                <ul className={`menuNav ${isOpen ? " showMenu" : ""}`}>

                    <li className='navBar__item' >
                        <Link to='/About' className='nav__link'>About</Link>
                    </li>
                    <li className='navBar__item' >
                        <Link to='/Shop' className='nav__link'>Shop</Link>

                    </li>
                    <li className='navBar__item' >
                        <Link to='/Contact' className='nav__link'>Contact</Link>

                    </li>

                </ul>
                <Link to='/Cart'> <BiShoppingBag className='navBar__icon' size={26} color="#101010" ></BiShoppingBag></Link>

        </nav>


        </header >
    )
}
