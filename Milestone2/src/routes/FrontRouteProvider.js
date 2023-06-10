import React from 'react'
import {
   createBrowserRouter,
   createRoutesFromElements,
   Route
} from 'react-router-dom'

import Autenticacao from '../pages/Auth'
import AdministrarUsuarios from '../pages/Users'
import CadProdutos from '../pages/RegisterProducts'
import Carrinho from '../pages/Cart'
import EditarCad from '../pages/EditProfile'
import EditarProd from '../pages/EditProducts'
import ErrorPage from '../components/Error'
import Home from '../pages/Home'
import Game from '../pages/Game'
import Layer from '../pages/Layer'
import Produto from '../pages/Product'
import Products from '../pages/Products'
import Sold from '../pages/Sold'

import AuthConsumer from '../hooks/auth'

function RequireAuth({children}){
   const [authed] = AuthConsumer()
   return authed.auth === true ? children : <Autenticacao />
}

const elements = createRoutesFromElements(
   <Route path='/' element={<Layer />} errorElement={<ErrorPage />}>

      {/* Rotas Públicas */}
      <Route index element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='game' element={<Game />} />
      <Route path='auth' element={<Autenticacao />} />
      <Route path='*' element={<ErrorPage />} />

      {/* Rotas Privadas */}
      <Route path='cadprodutos' element={<RequireAuth><CadProdutos /></RequireAuth>} />
      <Route path='produto' element={<RequireAuth><Produto /></RequireAuth>} />
      <Route path='produtos' element={<RequireAuth><Products /></RequireAuth>} />
      <Route path='produtos/:id' element={<RequireAuth><Produto /></RequireAuth>} />
      <Route path='editar/:id' element={<RequireAuth><EditarProd /></RequireAuth>} />
      <Route path='editar/cadastro' element={<RequireAuth><EditarCad /></RequireAuth>} />
      <Route path='carrinho' element={<RequireAuth><Carrinho /></RequireAuth>} />
      <Route path='sold' element={<RequireAuth><Sold /></RequireAuth>} />
      <Route path='autorizar' element={<RequireAuth><AdministrarUsuarios /></RequireAuth>} />

   </Route>
)

const router = createBrowserRouter(elements)

export default router
