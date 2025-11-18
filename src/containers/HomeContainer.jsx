import Header from "../components/Header";

export default function Home() {
    return (
        <>
            <Header className={"header-home-page"} isHomePageSelected={true}/>
            <main role="main" className="main-home-page">
                <section className="best-sellers" aria-labelledby="best-sellers-heading">
                    <h2 id="best-sellers-heading">Take a look at our best sellers</h2>

                    <div className="product-grid">
                        <div className="product-card">
                            <img id="product-image" src="https://images.pexels.com/photos/6694337/pexels-photo-6694337.jpeg" alt="Oslo chair" loading="lazy" />
                            <p className="product-name">The Oslo chair</p>
                            <p className="product-price">300 000₩</p>
                        </div>

                        <div className="product-card">
                            <img id="product-image" src="https://images.pexels.com/photos/6694337/pexels-photo-6694337.jpeg" alt="Oslo chair" loading="lazy" />
                            <p className="product-name">The Oslo chair</p>
                            <p className="product-price">300 000₩</p>
                        </div>
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