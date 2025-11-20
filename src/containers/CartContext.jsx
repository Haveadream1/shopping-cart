import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
    const [idArr, setIdArr] = useState([]);

    const addItemsIdToCart = (itemId) => {
        setIdArr(prev => {
            return [...prev, itemId];
        })
    }

    const isItemIdInCart = (itemId) => {
        return idArr.includes(itemId)
    }

    const clearIdArr = () => {
        setIdArr([]);
    }

    const value = {
        idArr,
        addItemsIdToCart,
        isItemIdInCart,
        clearIdArr
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useData must be used in a DataProvider");
    }
    return context;
}