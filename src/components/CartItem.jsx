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
        // setItemQuantity(prev => prev + 1);
    }
    const handleDecreaseButton = () => {
        decreaseItemQuantity(itemId)
        // if (itemQuantity > 1 ) {
        //     setItemQuantity(prev => prev - 1);
        // }
    }
    const handleDeleteButton = () => {
        removeIdFromCart(itemId);
        // setItemQuantity(1); // TODO need to fix issue
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
                    {/* {itemQuantity[itemId] ? (
                        `${itemQuantity[itemId]}`
                    ) : (
                        <p>loading...</p>
                    )} */}
                    {itemQuantity[itemId]}
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