import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import AuthConsumer from '../../hooks/auth'

function NavBarDD() {

    const [authed, dispatch] = AuthConsumer()
    const navigate = useNavigate()

    function logout(e) {
        e.preventDefault()
        dispatch({ type: 'logout' })
        navigate('home')
    }

    return (
        <li className="nav-item dropdown">
            
            <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-person icon-config"></i> Profile
            </a>

            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li><Link className="dropdown-item" to="/home">Home</Link></li>

                {!authed.auth && (
                    <li><Link className="dropdown-item" to="/auth"> Autenticação</Link></li>
                )}


                {authed.auth && (
                    <>
                        <li><Link className="dropdown-item" to="/carrinho">Carrinho</Link></li>
                        <li><Link className="dropdown-item" to="/produtos">Produtos</Link></li>
                    </>
                )}

                {authed.auth && authed.isAdministrator && (
                    <>
                        <li><hr className="dropdown-divider" /></li>
                    </>
                )}

                {authed.isAdmin && (
                    <li><Link className="dropdown-item" to="/autorizar">Administrar Usuários</Link></li>
                )}

                {authed.auth && authed.isAdministrator && (
                    <li><Link className="dropdown-item" to="/cadprodutos">Cadastrar Produtos</Link></li>
                )}

                {authed.auth && (
                    <>
                        <li><Link className="dropdown-item" to="/editar/cadastro">Editar Profile</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link onClick={(e) => logout(e)} className="dropdown-item" href="/home"> Logout </Link></li>
                    </>
                )}
            </ul>
        </li>
    )
}

export default NavBarDD