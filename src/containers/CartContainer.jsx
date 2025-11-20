import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import { useCart } from "./CartContext";
import { useData } from "./DataContext";

export default function Cart() {
    const dataArr = useData();
    const {idArr, isItemIdInCart, clearIdArr} = useCart();
    const [selectionedArr, setSelectionedArr] = useState([]);
    const [itemCount, setItemCount] = useState(0);

    const retrieveSelectionedItems = (arr) => {
        const selectionedItems = [];

        // loop to retrieve the item from the fetched data with the selected id
        for (let i = 0; i < arr.length; i++) {
            if (isItemIdInCart(arr[i].id)) {
                selectionedItems.push(arr[i]);
            }
        }
        setItemCount(selectionedItems.length);
        setSelectionedArr(selectionedItems);
    }

    useEffect(() => {
        retrieveSelectionedItems(dataArr);
    }, []);

    const handleButtonClick = () => { // Reset state
        if (idArr.length !== 0) {
            clearIdArr();
            setSelectionedArr([]);
            setItemCount(0);
        }
    }

    useEffect(() => {
        console.log(idArr, selectionedArr);
    }, [idArr]);


    return (
        <>
            <Header className={"header-cart-page"} />
            <main role="main" className="main-cart-page">
                <h1 id="cart-heading">Your shopping cart</h1>

                <section className="cart-content-section" aria-labelledby="cart-content-heading">
                    <span className="span-content-header">
                        <h2 id="order-content-heading">{itemCount} items</h2>
                        <button className="clear-button" type="button" onClick={handleButtonClick}>Clear all</button>
                    </span>

                    <div className="items-grid">
                        {selectionedArr ? (
                            selectionedArr.map((item, index) => 
                                <CartItem 
                                    key={index}
                                    imageSrc={item.image}
                                    imageAlt={item.title}
                                    imageName={item.title}
                                    itemPrice={item.price}
                                />
                            )
                        ) : (
                            <p>Loading ...</p>
                        )}
                    </div>
                </section>

                <section className="order-summary-section" aria-labelledby="order-summary-heading">
                    <h2 id="order-summary-heading">Order Summary</h2>
                    <div className="order-cost-recap">
                        <span className="span-values-container">
                            <p>SubTotal</p>
                            <p className="subTotal-value">150 000₩</p>
                        </span>
                        <span className="span-values-container">
                            <p>Shipping</p>
                            <p className="shipping-value">25 000₩</p>
                        </span>
                        <span className="span-values-container bold">
                            <p>Total</p>
                            <p className="total-value">150 000₩</p>
                        </span>
                    </div>
                    <button className="checkout-button" type="button">Proceed to Checkout</button>
                </section>
            </main>
        </>
    );
}


{/* <div className="cart-item">
                            <img id="cart-item-image" src="https://images.pexels.com/photos/6694337/pexels-photo-6694337.jpeg" alt="" loading="lazy" />

                            <div className="item-content">
                                <p className="item-name">Clasic White T-shirt</p>
                                <p className="item-price">25 000₩</p>
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
                        </div> */}