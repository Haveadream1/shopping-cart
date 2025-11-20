export default function CartItem({
    imageSrc,
    imageAlt,
    itemName,
    itemPrice,
}) {
    return (
        <div className="cart-item">
            <img id="cart-item-image" src={imageSrc} alt={imageAlt} loading="lazy" />

            <div className="item-content">
                <p className="item-name">{itemName}</p>
                <p className="item-price">{itemPrice} ₩</p>
            </div>

            <div className="item-related-buttons">
                <button className="item-button" type="button">
                    <span className="material-symbols-outlined" role="img" aria-label="Increase icon" alt="Increase icon" loading="lazy">add</span>
                </button>
                <p className="quantity-text">1</p>
                <button className="item-button" type="button">
                    <span className="material-symbols-outlined" role="img" aria-label="Decrease icon" alt="Decrease icon" loading="lazy">remove</span>
                </button>
                <button className="item-button" type="button">
                    <span className="material-symbols-outlined" role="img" aria-label="Remove icon" alt="Remove icon" loading="lazy">delete</span>
                </button>
            </div>
        </div>
    );
}