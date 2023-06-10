import React from 'react'

import AuthConsumer from '../../hooks/auth'
import CartConsumer from '../../hooks/cart'
import CardFigure from './CardFigure'
import CardDescription from './CardDescription'
import CardFooter from './CardFooter'
import CardEditor from './CardEditor'

import { users, produtos } from '../../database/database'

function Card({ info }) {
    const [authed] = AuthConsumer()
    const [cart, dispatchCart] = CartConsumer()

    function handleCart(e, info) {
        e.preventDefault()
        try {
            dispatchCart({ type: 'addCart', product: info })
        } catch (e) {
            console.log(e)
        }
    }

    function handleDelete(e) {
        e.preventDefault()
        const index = produtos.findIndex((produto) => produto._id === info._id)
        if (index !== -1) {
            produtos.splice(index, 1)
            dispatchCart({ type: 'removeItem', id: info._id })
            document.getElementById(info._id).remove()
        } 
    }
    const aux = Number(info.quantidade) > 0 
    return (
        <>
        {aux &&
            <article id={info._id} className="card d-inline-flex card-container">
            <CardFigure imgName={info.imgName} id={info.id} />
            <CardDescription price={info.preco} stock={info.quantidade} />
            <CardFooter id={info._id} info={info} onClick={handleCart} />
            {!authed.isAdmin &&
                authed.isAdministrator &&
                users.find((user) => user.id === info.id_produtor)?.id === authed.id && (
                    <CardEditor id={info._id} onDelete={handleDelete} />
                )}
            {authed.isAdmin && <CardEditor id={info._id} onDelete={handleDelete} />}
            </article>
        
        }
        </>
    )
}

export default Card