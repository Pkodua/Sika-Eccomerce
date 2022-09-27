import Contact from "./pages/Contact/contactPage";
import {Route,BrowserRouter, Routes} from 'react-router-dom';
import Shop from "./pages/Shop/shop";
import About from "./pages/About/about";
import Home from "./pages/Home/home";
import Cart from "./components/Cart/Cart"
import {React,useState,useEffect,}  from 'react';
import commerce  from './Lib/commerce';
import './App.scss'


function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Cart" element={<Cart/>} />
        
       

      </Routes>
    </BrowserRouter>
    
    
     
  
    </div>
    
      
   
  );
}

export default App;

