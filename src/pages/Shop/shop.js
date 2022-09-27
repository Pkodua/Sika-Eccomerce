import { ClassNames } from '@emotion/react';
import { React, useState, useEffect, } from 'react';
import Navbar from '../../components/Navbar/navBar';
import ProductList from '../../components/Products/productList';
import commerce from '../../Lib/commerce';
import Footer from '../../components/contact/contact';
import '../Shop/shop.scss';
export default function Shop() {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }
  const fetchCart = () => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
    }).catch((error) => {
      console.log('There was an error fetching the cart', error);
    });
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  const handleAddToCart = (productId, quantity) => {
    commerce.cart.add(productId, quantity).then((item) => {
      setCart(item.cart);
    }).catch((error) => {
      console.error('There was an error adding the item to the cart', error);
    });
  }
  const handleUpdateCartQty = (lineItemId, quantity) => {
    commerce.cart.update(lineItemId, { quantity }).then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.log('There was an error updating the cart items', error);
    });
  }
    return (

      <section >
        <Navbar></Navbar>
        <div className='shopper'>
        <ProductList onAddToCart={handleAddToCart} product={products} className='shop'></ProductList>
        </div>
        <Footer/>


      </section>
    )
  }
