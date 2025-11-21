import { useEffect, useState } from "react";
import { useCart } from "../containers/CartContext";

export default function ShopItem({ 
    itemId,
    imageSrc,
    imageAlt,
    itemName,
    itemPrice,
}) {
    const {addItemsIdToCart, setSubTotal} = useCart();
    const [isBtnClicked, setIsBtnClicked] = useState(false); // Put in a higher instance, so it doesnt change when we switch pages

    const handleButtonClick = () => {
        if (!isBtnClicked) {
            addItemsIdToCart(itemId);
            setIsBtnClicked(true);
            setSubTotal(prev => Math.round((prev + itemPrice)* 100) / 100);
        }
    };

    return (
        <div className="shop-item">
            <img className="shop-item-image" src={imageSrc} alt={imageAlt} loading="lazy" />
            <p className="shop-item-name">{itemName}</p>
            <p className="shop-item-price">{itemPrice} ₩</p>
            <button className="add-to-cart-button" onClick={handleButtonClick}>
                {isBtnClicked ? (
                    `Added to cart`
                ) : (
                    `Add to cart`
                )}
            </button>
        </div>
    );
}