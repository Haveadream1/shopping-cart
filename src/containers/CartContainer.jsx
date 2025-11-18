import Header from "../components/Header";

export default function Cart() {
    return (
        <>
            <Header className={"header-cart-page"} />
            <main role="main" class="main-cart-page">
                <h1 id="cart-heading">Your shopping cart</h1>

                <section class="cart-content-section" aria-labelledby="cart-content-heading">
                    <span class="span-content-header">
                        <h2 id="order-content-heading">3 items</h2>
                        <button class="clear-button" type="button">Clear all</button>
                    </span>

                    <div class="items-grid">
                        <div class="cart-item">
                            <img id="cart-item-image" src="https://images.pexels.com/photos/6694337/pexels-photo-6694337.jpeg" alt="" loading="lazy" />

                            <div class="item-content">
                                <p class="item-name">Clasic White T-shirt</p>
                                <p class="item-price">25 000₩</p>
                            </div>

                            <div class="item-related-buttons">
                                <button class="item-button" type="button">
                                    <span class="material-symbols-outlined" role="img" aria-label="Increase icon" alt="Increase icon" loading="lazy">add</span>
                                </button>
                                <p class="quantity-text">1</p>
                                <button class="item-button" type="button">
                                    <span class="material-symbols-outlined" role="img" aria-label="Decrease icon" alt="Decrease icon" loading="lazy">remove</span>
                                </button>
                                <button class="item-button" type="button">
                                    <span class="material-symbols-outlined" role="img" aria-label="Remove icon" alt="Remove icon" loading="lazy">delete</span>
                                </button>
                            </div>
                        </div>

                        <div class="cart-item">
                            <img id="cart-item-image" src="https://images.pexels.com/photos/6694337/pexels-photo-6694337.jpeg" alt="" loading="lazy" />

                            <div class="item-content">
                                <p class="item-name">Clasic White T-shirt</p>
                                <p class="item-price">25 000₩</p>
                            </div>

                            <div class="item-related-buttons">
                                <button class="item-button" type="button">
                                    <span class="material-symbols-outlined" role="img" aria-label="Increase icon" alt="Increase icon" loading="lazy">add</span>
                                </button>
                                <p class="quantity-text">1</p>
                                <button class="item-button" type="button">
                                    <span class="material-symbols-outlined" role="img" aria-label="Decrease icon" alt="Decrease icon" loading="lazy">remove</span>
                                </button>
                                <button class="item-button" type="button">
                                    <span class="material-symbols-outlined" role="img" aria-label="Remove icon" alt="Remove icon" loading="lazy">delete</span>
                                </button>
                            </div>
                        </div>

                        <div class="cart-item">
                            <img id="cart-item-image" src="https://images.pexels.com/photos/6694337/pexels-photo-6694337.jpeg" alt="" loading="lazy" />

                            <div class="item-content">
                                <p class="item-name">Clasic White T-shirt</p>
                                <p class="item-price">25 000₩</p>
                            </div>

                            <div class="item-related-buttons">
                                <button class="item-button" type="button">
                                    <span class="material-symbols-outlined" role="img" aria-label="Increase icon" alt="Increase icon" loading="lazy">add</span>
                                </button>
                                <p class="quantity-text">1</p>
                                <button class="item-button" type="button">
                                    <span class="material-symbols-outlined" role="img" aria-label="Decrease icon" alt="Decrease icon" loading="lazy">remove</span>
                                </button>
                                <button class="item-button" type="button">
                                    <span class="material-symbols-outlined" role="img" aria-label="Remove icon" alt="Remove icon" loading="lazy">delete</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="order-summary-section" aria-labelledby="order-summary-heading">
                    <h2 id="order-summary-heading">Order Summary</h2>
                    <div class="order-cost-recap">
                        <span class="span-values-container">
                            <p>SubTotal</p>
                            <p class="subTotal-value">150 000₩</p>
                        </span>
                        <span class="span-values-container">
                            <p>Shipping</p>
                            <p class="shipping-value">25 000₩</p>
                        </span>
                        <span class="span-values-container bold">
                            <p>Total</p>
                            <p class="total-value">150 000₩</p>
                        </span>
                    </div>
                    <button class="checkout-button" type="button">Proceed to Checkout</button>
                </section>
            </main>
        </>
    );
}