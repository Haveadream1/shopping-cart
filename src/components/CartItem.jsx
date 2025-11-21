import { useEffect } from "react";
import { useCart } from "../containers/CartContext";

export default function CartItem({
    itemId,
    imageSrc,
    imageAlt,
    itemName,
    itemPrice,
}) {
    const {removeIdFromCart, increaseItemQuantity, decreaseItemQuantity, resetItemQuantity, itemQuantity, setSubTotal} = useCart();

    const handleIncreaseButton = () => {
        increaseItemQuantity(itemId)
        setSubTotal(prev => Math.round((prev + itemPrice)* 100) / 100);
    }
    const handleDecreaseButton = () => {
        if (itemQuantity[itemId] > 1) {
            decreaseItemQuantity(itemId)
            setSubTotal(prev => Math.round((prev - itemPrice)* 100) / 100);
        }
    }
    const handleDeleteButton = () => {
        removeIdFromCart(itemId);
        resetItemQuantity(itemId);
        setSubTotal(prev => Math.round((prev - (itemPrice * itemQuantity[itemId] || 1))* 100) / 100);
    }

    // useEffect(() => {
    //     console.log(itemQuantity[itemId], "test");
    // }, [itemQuantity[itemId]]);

    return (
        <div className="cart-item">
            <img id="cart-item-image" src={imageSrc} alt={imageAlt} loading="lazy" />

            <div className="item-content">
                <p className="item-name">{itemName}</p>
                <p className="item-price">
                    {!itemQuantity[itemId] ? (
                        `${itemPrice} ₩`
                        
                    ) : (
                        `${itemPrice * itemQuantity[itemId]} ₩`
                    )}
                </p>
            </div>

            <div className="item-related-buttons">
                <button className="item-button" type="button" onClick={handleIncreaseButton}>
                    <span className="material-symbols-outlined" role="img" aria-label="Increase icon" alt="Increase icon" loading="lazy">add</span>
                </button>
                <p className="quantity-text">
                    {itemQuantity[itemId] || 1}
                </p>
                <button className="item-button" type="button" onClick={handleDecreaseButton}>
                    <span className="material-symbols-outlined" role="img" aria-label="Decrease icon" alt="Decrease icon" loading="lazy">remove</span>
                </button>
                <button className="item-button" type="button" onClick={handleDeleteButton}>
                    <span className="material-symbols-outlined" role="img" aria-label="Remove icon" alt="Remove icon" loading="lazy">delete</span>
                </button>
            </div>
        </div>
    );
}