import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useData } from "./DataContext";
import ShopItem from "../components/ShopItem";

export default function Shop() {
    const dataArr = useData();

    const [itemsArr, setItemsArr] = useState();

    const retrieveShopItems = (arr) => {
        const shopItems = arr.slice(0,12);
        setItemsArr(shopItems);
    }

    useEffect(() => {
        retrieveShopItems(dataArr);
    }, []);

    return (
        <>
            <Header className={"header-shop-page"} />
            <main role="main" className="main-shop-page">
                <section className="shop-header" aria-labelledby="shop-heading">
                    <h1 id="shop-heading">Shop our collection</h1>
                    <p>Discover our latest high-quality items</p>
                </section>

                <div className="shop-grid">
                    {itemsArr ? (
                        itemsArr.map((item, index) =>
                            <ShopItem
                                key={index}
                                itemId={item.id}
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
            </main>
        </>
    );
}

                    // <div className="shop-item">
                    //     <img className="shop-item-image" src="https://images.pexels.com/photos/6694337/pexels-photo-6694337.jpeg" alt="" loading="lazy" />
                    //     <p className="shop-item-name">Ergo comfort chair</p>
                    //     <p className="shop-item-price">36 000₩</p>
                    //     <button className="add-to-cart-button">Add to cart</button>
                    // </div>

                    // <div className="shop-item">
                    //     <img className="shop-item-image" src="https://images.pexels.com/photos/6694337/pexels-photo-6694337.jpeg" alt="" loading="lazy" />
                    //     <p className="shop-item-name">Ergo comfort chair</p>
                    //     <p className="shop-item-price">36 000₩</p>
                    //     <button className="add-to-cart-button">Add to cart</button>
                    // </div>