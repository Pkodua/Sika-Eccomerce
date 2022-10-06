import Contact from "./pages/Contact/contactPage";
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import Shop from "./pages/Shop/shop";
import About from "./pages/About/about";
import Home from "./pages/Home/home";
import Cart from './pages/Cart/cart'
import {React,useEffect,useState} from 'react';

import './App.scss'
import commerce from "./Lib/commerce";
import Navbar from "./components/Navbar/navBar";

function App() {
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

  const emptyMessage = () => {
    if (cart.total_unique_items > 0) {
      return;
    }

    return (
      <p className="cart__none">
        You have no items in your shopping cart, start adding some!
      </p>
    );
  }
  // const renderItems = () => (
  //     cart.line_items.map((lineItem) => (
  //       <CartItem
  //         item={lineItem}
  //         key={lineItem.id}
  //         className="cart__inner"
  //       />
  //     ))
  //   );

  const renderTotal = () => (
    <div className="cart__total">
      <p className="cart__total-title">Subtotal:</p>
      <p className="cart__total-price">{cart.subtotal.formatted_with_symbol}</p>
    </div>
  );


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cart={cart}/>        
        <div>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/About" element={<About/>} />
            <Route path="/Shop" element={<Shop products={products}/>} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart"  element={<Cart cart={cart}/>} >
             
            </Route>





          </Routes>
        </div>
      </BrowserRouter>




    </div>



  );
}

export default App;

