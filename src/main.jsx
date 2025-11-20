import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './containers/HomeContainer.jsx'
import Shop from './containers/ShopContainer.jsx'
import Cart from './containers/CartContainer.jsx'
import ErrorPage from './containers/ErrorContainer.jsx'
import { DataProvider } from './containers/DataContext.jsx'
import CartProvider from './containers/CartContext.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/shop",
        element: <Shop />
    },
    {
        path: "/cart",
        element: <Cart />
    },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </DataProvider>
  </StrictMode>,
)