import Cart from "./pages/Cart";
import ShopPage from "./pages/ShopPage";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { useState, useEffect } from "react";
import ContactPage from "./pages/ContactPage";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";
import { CartProvider } from "./context/CartContext";
import {FavoriteProvider} from "./context/FavoriteContext";

function App() {
  
  return (
    <div className="app">
      <CartProvider>
        <FavoriteProvider>
          <NavBar />

          <Routes>
            <Route path='/' element={ <HomePage/> } />
            <Route path='/about' element={ <AboutPage/> } />
            <Route path='/contact' element={ <ContactPage/> } />
            <Route path='/shop' element={ <ShopPage/> } />
            <Route path='/shop/:id' element={ <SingleProduct /> } />
            <Route path='/cart' element={ <Cart/> } />
          </Routes>
        </FavoriteProvider>
        
      </CartProvider>
      
    </div>
  );
}

export default App;
    
  