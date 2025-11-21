import { createContext, useContext, useState } from "react";
const CartContext = createContext();

export default function CartProvider({ children }) {
    const [idArr, setIdArr] = useState([]);
    const [itemQuantity, setItemQuantity] = useState([]); // id, quantity
    const [subTotal, setSubTotal] = useState([0]);

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

    const increaseItemQuantity = (itemId) => {
        setItemQuantity(prev => ({
            ...prev,
            [itemId]: (prev[itemId] || 1) + 1
        }));
    }

    const decreaseItemQuantity = (itemId) => {
        setItemQuantity(prev => ({
            ...prev,
            [itemId]: (prev[itemId] || 1) - 1
        }));
    }

    const resetAllItemsQuantity = () => {
        setItemQuantity([]);
    }

    const resetItemQuantity = (itemId) => {
        setItemQuantity(prev => ({
            ...prev,
            [itemId]: 0
        }))
    }

    const removeIdFromCart = (itemId) => {
        setIdArr(prev => 
            prev.filter(id => id !== itemId) // Keep all id that doesn't match the one we remove
        )
    }

    const resetSubTotal = () => {
        setSubTotal(0);
    }

    const value = {
        idArr,
        addItemsIdToCart,
        isItemIdInCart,
        clearIdArr,
        itemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        resetAllItemsQuantity,
        resetItemQuantity,
        removeIdFromCart,
        subTotal,
        setSubTotal,
        resetSubTotal
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
