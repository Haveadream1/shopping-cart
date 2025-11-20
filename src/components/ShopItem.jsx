import { useCart } from "../containers/CartContext";

export default function ShopItem({ 
    itemId,
    imageSrc,
    imageAlt,
    itemName,
    itemPrice,
}) {
    const {addItemsIdToCart, idArr} = useCart();

    const handleButtonClick = () => {
        addItemsIdToCart(itemId)
        console.log(idArr)
    };

    return (
        <div className="shop-item">
            <img className="shop-item-image" src={imageSrc} alt={imageAlt} loading="lazy" />
            <p className="shop-item-name">{itemName}</p>
            <p className="shop-item-price">{itemPrice} ₩</p>
            <button className="add-to-cart-button" onClick={handleButtonClick}>Add to cart</button>
        </div>
    );
}