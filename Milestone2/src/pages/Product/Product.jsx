import React from 'react'

import CartConsumer from '../../hooks/cart'

import BtnSubmit from '../../components/Form/BtnSubmit'
import ProductNameImageDescription from './ProductNID'
import ProductProducer from './ProductProducer'
import ProductStockPrice from './ProductSP'

function Product({ producer, product }) {

    // Será necessário acessar o contexto do carrinho para atualizá-lo.
    const [cart, dispatchCart] = CartConsumer() // eslint-disable-line

    // Cuida das compras realizadas pelo usuário.
    function handleBuy(e) {

        // Previne o comportamento de compra
        e.preventDefault()

        // Adiciona produto no carrinho
        dispatchCart({ type: 'addCart', product: product })

    }

    return (
        <div className="container-product">
            <div className="row">

                <div className="col-6">
                    <ProductNameImageDescription 
                        product={product}/>
                </div>

                <div className="col-4">
                    <div className="row border rounded-3 productBoard">    
                        <ProductProducer 
                            producer={producer} />        
                        <ProductStockPrice 
                            product={product} />
                        <BtnSubmit
                            id="submitFormLogin"
                            classes={'btn btn-primary'}
                            handleSubmit={handleBuy}>
                            Comprar
                        </BtnSubmit>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Product
