import React, { useState } from 'react';
import './../Navbar/navBar.scss';
import { Fade as Hamburger } from 'hamburger-react';
import { BrowserRouter, Link } from 'react-router-dom';
import ioMdClose from 'react-icons';
import { BiShoppingBag } from "react-icons/bi"
import about from '../../pages/About/about';
import contact from '../contact/contact';
import shop from '../../pages/Shop/shop';
import Cart from '../Cart/Cart';
export default function Navbar() {


    const [isOpen, setOpen] = useState(false)

    const closeMenu = () => {
        setOpen(false)
    }
    return (
        <header className='nav'>
            <nav className='navBar'>

                <Hamburger size={25} color="#101010" direction="left" easing="ease-in" toggled={isOpen} toggle={setOpen} />

                <a href='http://localhost:3002/' className='navBar__logo'> SIKA</a>
                <ul className={`menuNav ${isOpen ? " showMenu" : ""}`}>

                    <li className='navBar__item' >
                        <a href='http://localhost:3002/About' className='nav__link'>About</a>
                    </li>
                    <li className='navBar__item' >
                        <a href='http://localhost:3002/Shop' className='nav__link'>Shop</a>

                    </li>
                    <li className='navBar__item' >
                        <a href='http://localhost:3002/Contact' className='nav__link'>Contact</a>

                    </li>

                </ul>
                <a href='http://localhost:3002/Cart'> <BiShoppingBag className='navBar__icon' size={26} color="#101010" ></BiShoppingBag></a>

        </nav>


        </header >
    )
}
