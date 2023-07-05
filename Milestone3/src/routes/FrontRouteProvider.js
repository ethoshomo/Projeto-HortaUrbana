import React from 'react'
import {
   createBrowserRouter,
   createRoutesFromElements,
   Route
} from 'react-router-dom'

import AboutUs from '../pages/AboutUs'
import Authentication from '../pages/Auth'
import Users from '../pages/Users'
import RegisterProducts from '../pages/RegisterProducts'
import Cart from '../pages/Cart'
import EditProfile from '../pages/EditProfile'
import EditProducts from '../pages/EditProducts'
import ErrorPage from '../components/Error'
import Home from '../pages/Home'
import Layer from '../pages/Layer'
import Product from '../pages/Product'
import Products from '../pages/Products'
import Sold from '../pages/Sold'

import AuthConsumer from '../hooks/auth'

function RequireAuth({children}){
   const [authed] = AuthConsumer()
   return authed.auth === true ? children : <Authentication />
}

const elements = createRoutesFromElements(
   <Route path='/' element={<Layer />} errorElement={<ErrorPage />}>

      {/* Rotas Públicas */}
      <Route index element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='auth' element={<Authentication />} />
      <Route path='sobrenos' element={<AboutUs />} />
      <Route path='*' element={<ErrorPage />} />

      {/* Rotas Privadas */}
      <Route path='cadprodutos' element={<RequireAuth><RegisterProducts /></RequireAuth>} />
      <Route path='produto' element={<RequireAuth><Product /></RequireAuth>} />
      <Route path='produtos' element={<RequireAuth><Products /></RequireAuth>} />
      <Route path='produtos/:id' element={<RequireAuth><Product /></RequireAuth>} />
      <Route path='editar/:id' element={<RequireAuth><EditProducts /></RequireAuth>} />
      <Route path='editar/cadastro' element={<RequireAuth><EditProfile /></RequireAuth>} />
      <Route path='carrinho' element={<RequireAuth><Cart /></RequireAuth>} />
      <Route path='sold' element={<RequireAuth><Sold /></RequireAuth>} />
      <Route path='autorizar' element={<RequireAuth><Users /></RequireAuth>} />

   </Route>
)

const router = createBrowserRouter(elements)

export default router
