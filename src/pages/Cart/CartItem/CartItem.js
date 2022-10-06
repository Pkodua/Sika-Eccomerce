import React from 'react';

export default function CartItem({cart}){

    return(
        <div>
            <div>
                <img src={cart.image.url}></img>
                <p className='item__name'>{cart.name}</p>
                <p className='item__quantity'>{cart.quantity}</p>
                <p className='item__price'>{cart.line_total.formatted_with_symbol}</p>
                <button></button>
                

            </div>

        </div>
    )
}