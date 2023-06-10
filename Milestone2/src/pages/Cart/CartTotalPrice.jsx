import React from 'react'

function CartTotalPrice() {
    
    /* O total do carrinho é atualizado por meio de Java Script puro.
     * É atualizado no corpo o carrinho.*/

    return (
        <>
            <h5 className='board-title'>Total</h5>
            <p className='board-text text-center'>R$ <span id="totalPrice">0.00</span> (frete incluso)</p>
            <hr />
        </>
    )
}

export default CartTotalPrice