import { useEffect, useState } from "react";
import { useCart } from "../containers/CartContext";

export default function CartItem({
    itemId,
    imageSrc,
    imageAlt,
    itemName,
    itemPrice,
}) {
    // const [itemQuantity, setItemQuantity] = useState(1);
    const {removeIdFromCart, increaseItemQuantity, decreaseItemQuantity, itemQuantity} = useCart();

    const handleIncreaseButton = () => {
        increaseItemQuantity(itemId)
    }
    const handleDecreaseButton = () => {
        decreaseItemQuantity(itemId)
    }
    const handleDeleteButton = () => {
        removeIdFromCart(itemId);
    }

    useEffect(() => {
        console.log(itemQuantity[itemId]);
    }, [itemQuantity]);

    return (
        <div className="cart-item">
            <img id="cart-item-image" src={imageSrc} alt={imageAlt} loading="lazy" />

            <div className="item-content">
                <p className="item-name">{itemName}</p>
                <p className="item-price">{itemPrice} ₩</p>
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