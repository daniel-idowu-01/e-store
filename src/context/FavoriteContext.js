import { useState, createContext } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({children}) {

    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (name, price, image) => {
        setFavorites((prevState) => [...prevState, {name, price, image}]);
    }

    const alertWishList = () => {
        alert('Item had been added to wish list')
    }

    return(
        <FavoriteContext.Provider value={{ favorites, addToFavorites, alertWishList }}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContext;

