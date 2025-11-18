import { Link } from "react-router";

export default function Header({
    className,
    isHomePageSelected
}) {
    return (
        <header className={className}>
            <nav aria-label="Main navigation">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart" aria-label="Shopping cart">
                    <span className="material-symbols-outlined" role="img" aria-label="Shopping cart" alt="Shopping cart" loading="lazy">shopping_cart</span>
                </Link>
            </nav>

            {isHomePageSelected && 
                <div className="hero">
                    <div className="hero-text-container">
                    <h1>Discover ether items</h1>
                    <p>Browse our selection of handpicked items specially for you</p>
                    </div>
                    <img id="hero-image" src="https://images.pexels.com/photos/9565973/pexels-photo-9565973.jpeg" alt="Living room" loading="eager" />
                </div>
            }
        </header>
    );
}

// TODO: check icon and use routers