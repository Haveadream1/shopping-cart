import { createBrowserRouter, Route, Router, Routes, useLocation } from 'react-router';
import './App.css'
import Header from './components/Header';
import Cart from './containers/CartContainer';
import Home from './containers/HomeContainer';
import Shop from './containers/ShopContainer';

export default function App() {
    return (
        <>
            <Header className={"header-home-page"} isHomePageSelected={true}/>
        </>       
    );
}
