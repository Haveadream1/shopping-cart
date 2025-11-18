import Header from "../components/Header";

export default function Shop() {
    return (
        <>
            <Header className={"header-shop-page"} />
            <main role="main" className="main-shop-page">
                <section className="shop-header" aria-labelledby="shop-heading">
                    <h1 id="shop-heading">Shop our collection</h1>
                    <p>Discover our latest high-quality items</p>
                </section>

                <div className="shop-grid">
                    <div className="shop-item">
                        <img className="shop-item-image" src="https://images.pexels.com/photos/6694337/pexels-photo-6694337.jpeg" alt="" loading="lazy" />
                        <p className="shop-item-name">Ergo comfort chair</p>
                        <p className="shop-item-price">36 000₩</p>
                        <button className="add-to-cart-button">Add to cart</button>
                    </div>

                    <div className="shop-item">
                        <img className="shop-item-image" src="https://images.pexels.com/photos/6694337/pexels-photo-6694337.jpeg" alt="" loading="lazy" />
                        <p className="shop-item-name">Ergo comfort chair</p>
                        <p className="shop-item-price">36 000₩</p>
                        <button className="add-to-cart-button">Add to cart</button>
                    </div>
                </div>
            </main>
        </>
    );
}