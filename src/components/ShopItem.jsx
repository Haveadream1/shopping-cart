export default function ShopItem({ 
    imageSrc,
    imageAlt,
    itemName,
    itemPrice
}) {
    return (
        <div className="shop-item">
            <img className="shop-item-image" src={imageSrc} alt={imageAlt} loading="lazy" />
            <p className="shop-item-name">{itemName}</p>
            <p className="shop-item-price">{itemPrice} ₩</p>
            <button className="add-to-cart-button">Add to cart</button>
        </div>
    );
}