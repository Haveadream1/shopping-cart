import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import CartProvider from './containers/CartContext.jsx'
import Home from './containers/HomeContainer.jsx'
import Shop from './containers/ShopContainer.jsx'
import Cart from './containers/CartContainer.jsx'
import ErrorPage from './containers/ErrorContainer.jsx'
import { DataProvider } from './containers/DataContext.jsx'

import './styles/HomePage.css'
import './styles/ShopPage.css'
import './styles/CartPage.css'
import './styles/ErrorPage.css'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/shop",
        element: <Shop />,
        errorElement: <ErrorPage />
    },
    {
        path: "/cart",
        element: <Cart />,
        errorElement: <ErrorPage />
    },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </DataProvider>
  </StrictMode>
)