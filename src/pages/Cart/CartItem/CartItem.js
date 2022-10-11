import React from 'react';
import '../CartItem/CartItem.scss';

export default function CartItem({cart}){

    return(
        <div className='item'>
            <div className='item__container'>
                <img className='item__img' alt='item pic' src={cart.image.url}></img>
                <div className='item__container2'>
                <h3 className='item__name'>{cart.name}</h3>
                <p className='item__quantity'>{cart.quantity}</p>
                <p className='item__price'>{cart.line_total.formatted_with_symbol}</p>
                <button className='item__button'>remove</button>

                </div>
                
                

            </div>

        </div>
    )
}