import React from 'react'
import Card from '../../components/CardCart'
import CartConsumer from '../../hooks/cart'

function CartList() {
    
    // Recupera dados do contexto do carrinho
    const [cart] = CartConsumer()
    
    return (
        <div className="row me-3 rounded-3">
            {(<>{
                cart.length ?
                    cart.map(card => <Card key={card._id + '|card'} info={card} />) :
                    (<div className="text-center">Carrinho vazio!</div>)
            }</>)}
        </div>
    )
}

export default CartList