import React from 'react'
import { Link } from 'react-router-dom'
import { handleAddress } from '../../hooks/utils'

import AuthConsumer from '../../hooks/auth'

function CartAddress() {

    // Cria hook consumidor de contexto para 
    // recuperar dados da autenticação
    const [authed] = AuthConsumer()

    return (
        <>
            <h5 className='board-title'>Endereço de Entrega</h5>
            <p className='board-text'>{handleAddress(authed.street, authed.district, authed.city, authed.state)}</p>
            <p className='notation'><Link to='/editar/cadastro'>Alterar Endereço</Link></p>
            <hr />
        </>
    )
}

export default CartAddress