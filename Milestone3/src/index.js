import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './hooks/auth'
import { CartProvider } from './hooks/cart'
import router from './routes/FrontRouteProvider'

import "bootstrap-icons/font/bootstrap-icons.css";
import 'react-toastify/dist/ReactToastify.min.css'
import './css/style.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
