export default function BestSellersItem({
    imageSrc,
    imageAlt,
    productName,
    productPrice
 }) {
    return (
        <div className="product-card">
            {imageSrc ? (
                <img id="product-image" src={imageSrc} alt={imageAlt} loading="lazy" />
            ) : (
                <p>Loading ...</p>
            )}
            <p className="product-name">{productName}</p>
            <p className="product-price">{productPrice} ₩</p>
        </div>
    );
}