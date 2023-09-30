import { useState, createContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [items, setItems] = useState([]);
    const [quantity, setQuantity] = useState(1)

    // add to cart function
    const addToCart = (name, price, image, quantity, totalPrice) => {
        setItems((prevState) => [...prevState, {name, price, image, quantity, totalPrice}]);

    }

      // Calculate total price
    const calculateTotalPrice = items.reduce((total, item) => total + item.price, 0);

    const alertMessage = () => {
        alert('Item had been added to cart');
    }

    return(
        <CartContext.Provider value={{ items, addToCart, alertMessage, calculateTotalPrice, quantity, setQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;

