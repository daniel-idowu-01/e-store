import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import {FavoriteProvider} from "./FavoriteContext";

function App() {
  
  return (
    <div className="App">
      <CartProvider>
        <FavoriteProvider>
          <NavBar />

          <Routes>
            <Route path='/' element={ <HomePage/> } />
            <Route path='/about' element={ <AboutPage/> } />
            <Route path='/contact' element={ <ContactPage/> } />
            <Route path='/shop' element={ <ShopPage/> } />
            <Route path='/cart' element={ <Cart/> } />
            <Route path='/favorites' element={ <Favorites/> } />
          </Routes>
        </FavoriteProvider>
        
      </CartProvider>
      
    </div>
  );
}

export default App;
    
  