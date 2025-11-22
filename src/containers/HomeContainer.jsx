import { useEffect, useState } from "react";
import Header from "../components/Header";
import BestSellersItem from "../components/BestSellersItem";
import { useData } from "./DataContext";

export default function Home() {
    const [bestSellers, setBestSellersArr] = useState(null);

    const dataArr = useData(); // use the custom hook to retrieve the data fetched

    const sortProductByRating = (arr) => {
        arr.sort((a, b) => b.rating.rate - a.rating.rate); // sort the item array by rating
        const topRatedItems = arr.slice(0, 4) // select only the top 4 best sellers

        setBestSellersArr(topRatedItems);
    }

    useEffect(() => {
        sortProductByRating(dataArr);
    }, [dataArr]);
    
    return (
        <>
            <Header className={"header-home-page"} isHomePageSelected={true}/>
            <main role="main" className="main-home-page">
                <section className="best-sellers" aria-labelledby="best-sellers-heading">
                    <h2 id="best-sellers-heading">Take a look at our best sellers</h2>

                    <div className="product-grid">
                        {bestSellers ? (
                            bestSellers.map((item, index) => 
                                <BestSellersItem 
                                    key={index}
                                    imageSrc={item.image}
                                    imageAlt={item.title}
                                    productName={item.title}
                                    productPrice={item.price}
                                />
                            )
                        ) : (
                            <p>Loading ...</p>
                        )}
                    </div>
                </section>

                <section className="company-description" aria-labelledby="company-description-heading">
                    <div className="description-container">
                    <h2 id="company-description-heading">Our expertise since 1967</h2>
                    <p className="company-description-text">At Ether items, we are passionate about providing our customers with the best experience possible. Since 1967, we have been dedicated to sourcing the highest quality products from around the world and making them available to our customers. Our team is comprised of experienced professionals who are dedicated to providing exceptional customer service and ensuring that every interaction with Ether items is a positive one.</p>
                    </div>
                    <img id="company-description-image" src="https://images.pexels.com/photos/6694337/pexels-photo-6694337.jpeg" alt="Women making clay" loading="lazy" />
                </section>
            </main>

            <footer role="contentinfo">
                <p>&copy;2025 Ether items</p>
            </footer>
        </>
    );
}

    // Fetch all data and store in a list the 4 items with the best rating,
        // Display them in home page
    // In home page, display 12 items randomly
        // Name, price and image
        // When a button is clicked store the array of info
        // increase the count in cart
    // In cart page, display the array of selectioned items, display info