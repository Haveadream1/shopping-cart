import { createBrowserRouter, Route, Router, Routes, useLocation } from 'react-router';
import './App.css'
import Header from './components/Header';
import Cart from './containers/CartContainer';
import Home from './containers/HomeContainer';
import Shop from './containers/ShopContainer';

export default function App() {

    // const location = useLocation();

    // const setRootClass = () => {
    //     switch (location.pathname) {
    //         case "/":
    //             return "body-home-page";
    //         case "/shop":
    //             return "body-shop-page";
    //         case "/cart":
    //             return "body-cart-page";
    //         default:
    //             return "body-home-page";
    //     }
    // }

    return (
        <>
            <Header className={"header-home-page"} isHomePageSelected={true}/>
        </>       
    );
}

// export default function App() {
//     return (
//         <>
//             <Header className={"header-home-page"} isHomePageSelected={true}/>
//             <Home />
//         </>
//     );
// }

// export default function App() {
//     return (
//         <>
//             <Header />
//             <Shop />
//         </>
//     );
// }

// export default function App() {
//     return (
//         <>
//             <Header />
//             <Cart />
//         </>
//     );
// }
