import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import { useCart } from "./CartContext";
import { useData } from "./DataContext";

export default function Cart() {
    const dataArr = useData();
    const {idArr, isItemIdInCart, clearIdArr, resetAllItemsQuantity, subTotal, resetSubTotal} = useCart();
    const [selectionedArr, setSelectionedArr] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [total, setTotal] = useState(0);

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

    const handleClearAllBtn = () => { // Reset state
        if (idArr.length !== 0) {
            clearIdArr();
            setSelectionedArr([]);
            setItemCount(0);
            resetAllItemsQuantity();
            resetSubTotal();
        }
    }

    const handleCheckoutBtn = () => {
        if (subTotal > 0) { // To run when we push items as fee are always included
            alert(`Thank you for your purchase of ${total} ₩ !`);
        }
    }

    useEffect(() => {
        retrieveSelectionedItems(dataArr);

        console.log(idArr, selectionedArr);
    }, [idArr]);

    useEffect(() => {
        const shippingValue = 25;
        console.log(shippingValue, subTotal, subTotal+ shippingValue)
        setTotal(Number(subTotal + shippingValue).toFixed(2));
    }, [subTotal]);

    return (
        <>
            <Header className={"header-cart-page"} />
            <main role="main" className="main-cart-page">
                <h1 id="cart-heading">Your shopping cart</h1>

                <section className="cart-content-section" aria-labelledby="cart-content-heading">
                    <span className="span-content-header">
                        <h2 id="order-content-heading">{itemCount} items</h2>
                        <button className="clear-button" type="button" onClick={handleClearAllBtn}>Clear all</button>
                    </span>

                    <div className="items-grid">
                        {selectionedArr ? (
                            selectionedArr.map((item, index) => 
                                <CartItem 
                                    key={index}
                                    itemId={item.id}
                                    imageSrc={item.image}
                                    imageAlt={item.title}
                                    itemName={item.title}
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
                            <p>Sub-Total</p>
                            <p className="sub-total-value">{subTotal} ₩</p>
                        </span>
                        <span className="span-values-container">
                            <p>Shipping</p>
                            <p className="shipping-value">
                                {subTotal === 0 ? (
                                    `0 ₩`
                                ) : (
                                    `25 ₩`
                                )}
                            </p>
                        </span>
                        <span className="span-values-container bold">
                            <p>Total</p>
                            <p className="total-value">
                                {subTotal === 0 ? (
                                    `0 ₩`
                                ) : (
                                    `${total} ₩`
                                )}
                            </p>
                        </span>
                    </div>
                    <button className="checkout-button" type="button" onClick={handleCheckoutBtn}>Proceed to Checkout</button>
                </section>
            </main>
        </>
    );
}
