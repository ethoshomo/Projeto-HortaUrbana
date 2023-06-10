import React from 'react'
import NavBarItem from './NavBarItem'
import NavBarDD from './NavBarDD'

import AuthConsumer from '../../hooks/auth'

function NavBar() {
        
    const [authed] = AuthConsumer()

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-conf">
            <div className="container text-right">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0 w-50 text-right navbar-nav-scroll styleNavBar">
                            
                            <NavBarItem 
                                route='/home'
                                icon='bi-house'>
                                Home
                            </NavBarItem> 
                            
                            <NavBarItem 
                                route='/game'
                                icon='bi-joystick'>
                                Game
                            </NavBarItem>

                            {authed.auth && 
                            <NavBarItem 
                                route='/produtos' 
                                icon='bi-shop'>
                                Produtos 
                            </NavBarItem>}
                                            
                            {!authed.auth && 
                            <NavBarItem 
                                route='/auth' 
                                icon='bi-box-arrow-in-right'>
                                Autenticação
                            </NavBarItem>}
                            
                            <NavBarDD />

                            {authed.auth && 
                            <NavBarItem 
                                route='/carrinho' 
                                icon='bi-cart3'>
                                Carrinho
                            </NavBarItem>}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar