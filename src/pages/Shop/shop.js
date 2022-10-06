import { React, useState, useEffect, } from 'react';
import Navbar from '../../components/Navbar/navBar';
import ProductList from '../../components/Products/productList';
import commerce from '../../Lib/commerce'
import Footer from '../../components/contact/contact';
import '../Shop/shop.scss';

export default function Shop({products,cart}) {
  useEffect(() => {
    console.log(!!products);
  }, [products]);

    return (

      <section >
       
        <div className='shopper'>
         <ProductList product={products} className='shop'></ProductList>
        </div>
        <Footer/>


      </section>
    )
  }
