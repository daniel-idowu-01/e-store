import { useState, createContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [items, setItems] = useState([]);
    const [quantity, setQuantity] = useState(1)

    // add to cart function
    const addToCart = (id, name, price, image, quantity, totalPrice) => {
        setItems((prevState) => [...prevState, {id, name, price, image, quantity, totalPrice}]);
    }
    
    return(
        <CartContext.Provider value={{ items, addToCart, setItems, quantity, setQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;

