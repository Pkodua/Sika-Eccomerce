import Contact from "./pages/Contact/contactPage";
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import Shop from "./pages/Shop/shop";
import About from "./pages/About/about";
import Home from "./pages/Home/home";
import Cart from './pages/Cart/cart'
import CheckoutPage from "./pages/checkoutPage/checkoutPage";
import { React, useEffect, useState } from 'react';


import './App.scss'
import commerce from "./Lib/commerce";
import Navbar from "./components/Navbar/navBar";

function App() {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([])
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');



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
  const handleAddToCart = (productId, quantity) => {
    commerce.cart.add(productId, quantity).then((item) => {
      setCart(item.cart);
    }).catch((error) => {
      console.error('There was an error adding the item to the cart', error);
    });
  }
  useEffect(() => {

    fetchProducts();
    fetchCart()

  }, []);
  const handleUpdateCartQty = (lineItemId, quantity) => {
    commerce.cart.update(lineItemId, { quantity }).then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.log('There was an error updating the cart items', error);
    });
  }


  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }



  }
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cart={cart} />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />} />
            <Route path="/Shop" element={<Shop products={products} />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart cart={cart} />} />
            <Route path="/Checkout" element={<CheckoutPage cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />} />






          </Routes>
        </div>
      </BrowserRouter>




    </div>



  );
}

export default App;

