import React from 'react';
import '../contact/contact.scss';
import paypal from '../../assests/icons/paypal.png';
import express from '../../assests/icons/american-express.png';
import visa from '../../assests/icons/visa.png';
import apple from '../../assests/icons/apple-pay.png';
import insta from '../../assests/icons/instagram.png';
import twitter from '../../assests/icons/twitter.png';
import Fbook from '../../assests/icons/facebook.png';

export default function contact() {
    return (
        <section className='contact'>
            <div className='contact__us'>
                <h3  className='contact__title'>CONTACT US</h3>
                <ul>
                    <li className='contact__'  >
                        <span>Head Office:</span>26 Wyle Cop, Shrewsbury, Shropshire, SY1 1XD

                    </li>
                    <li className='contact__'>
                        <span>Tel:</span> 01743 234500
                    </li>
                    <li className='contact__'>
                        <span>Email</span> support@sika.com
                    </li>
                </ul>
                

            </div>
            <div className='contact__services'>
                <h3 className='contact__title'>COSTUMER SERVICES</h3>
                <a href='/'>Contact Us</a>
                <a href='/'>Track Your Order</a>
                <a href='/'>Product Care & Repair</a>
                <a href='/'>Frequently Asked Questions</a>
                <a href='/'>Shipping & Returns</a>
              

            </div>
            <div className='contact__about'>
            <h3 className='contact__title'>ABOUT US</h3>
            <a href='/'>About Us</a>
            <a href='/'>FAQ</a>
            <a href='/'>Sitemap</a>
            <a href='/'>Terms & Conditions</a>  
            <a href='/'>Privacy Policy</a>    
            

            </div>
            <div className='contact__catalog'> 
            <h3 className='contact__title'>CATALOG</h3>
            <a href='/'>Necklaces</a>
            <a href='/'>Earrings</a>
            <a href='/'>Bracelets</a>


            </div>
            <div className='contact__footer'>
                <img src={apple}></img>
                <img src={paypal}></img>
                <img src={visa}></img>
                <img src={express}></img>

            </div>

        </section>


    )
}
