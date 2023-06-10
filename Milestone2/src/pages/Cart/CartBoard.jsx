import React from 'react'
import CartAddress from './CartAddress'
import CartPaymentMethod from './CartPaymentMethod'
import CartTotalPrice from './CartTotalPrice'
import CartShipping from './CartShipping'
import CartTotalProduct from './CartTotalProducts'

function CartBoard({ cardNumber, setCardNumber }) {
    return (
        <div className="row border rounded-3 resumoBoard">
            <CartTotalProduct />
            <CartShipping />
            <CartTotalPrice />

            <CartPaymentMethod
                cardNumber={cardNumber}
                setCardNumber={setCardNumber} />

            <CartAddress />

            <div>
                {/* Não alterar o name e o className processing. 
                    É o método de reconhecimento do botão pela
                    função de processamento do carrinho.*/}
                <button
                    name='processing'
                    className='submit processing'>
                    Finalizar
                </button>
            </div>


        </div>
    )
}

export default CartBoard