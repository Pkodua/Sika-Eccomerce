import {React,useEffect} from 'react';
import Navbar from '../../components/Navbar/navBar';
import CartItem from './CartItem/CartItem';
import '../Cart/cart.scss'
import Grid from '@mui/material/Grid';
import productItem from '../../components/Products/Product/productItem';
import { Link } from 'react-router-dom';
export default function Cart( {cart}) {
 const products= cart.line_items
   console.log(products)
    return (
    <>
  
    <Navbar/> 
    <section className='cart'>
      <h2 className='cart__head'>Your Bag</h2>
      <div className='cart__header'>
        <h5 className='cart__tittle'>Product</h5>
        <div className='cart__container'>
          <h5 className='cart__subtittle'> PRICE</h5>
          <h5 className='cart__subtittle'> QUANTITY</h5>
          
        </div>
      </div>
      <Grid>
        {products?.map((cart)=>(
           <Grid item key={cart.id}>
            <CartItem cart={cart} key={cart.id}/>
           </Grid>

        ))}
         
      </Grid>
      <Link to='/Checkout'><button className='cart__checkout'>Checkout</button></Link>
    </section>
   
    </>
  )
    
}
