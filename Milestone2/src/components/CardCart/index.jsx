import React, { useEffect, useState } from 'react'
import CartConsumer from '../../hooks/cart'
import { checkNumber } from '../../hooks/utils'
import InputNumber from '../Form/FormInputNumber'
import CardCartFigure from './CardFigure'
import CardCartInfo from './CardInfo'

// Recupera o total de produtos que o usuário listou para comprar
function searchTotal(info, cart) {
    for (let product of cart) {
        if (product._id === info._id)
            return Number(product.totalProduct) ? Number(product.totalProduct) : 1
    }
    return 1
}

function CardCart({ info }) {

    // Habilita o contexto do carrinho
    const [cart, dispatchCart] = CartConsumer()
    
    // Estado da quantidade de produtos que o usuário deseja comprar
    const [number, setNumber] = useState(searchTotal(info, cart))

    // Atualiza carrinho sempre o que numero total mudar
    useEffect(() => {
        dispatchCart({ type: 'updateItem', id: info._id, value: number })
    }, [number])

    return (
        <article id={info._id} className="card p-3 d-inline-flex mb-3">
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>

                        <CardCartFigure info={info} />

                        <div className="card-carrinho-text text-center">
                            {/* Não alterar a classe total product desse input.
                                É o método de reconhecimento do botão pelo
                                processamento do carrinho.*/}
                            <InputNumber
                                classes='totalProduct form-control-sm product-quantity'
                                id='inputProductQuantity'
                                value={number}
                                name={info.id}
                                placeholder='Quantidade'
                                onChange={checkNumber}
                                setChange={setNumber}
                                min={1}
                                max={50}
                                limit={info.quantidade}>
                            </InputNumber>
                        </div>
                    </div>
                    <div className='col-6'>

                        <CardCartInfo info={info} />

                        {/* Não alterar o name e o className remove. 
                        É o método de reconhecimento do botão pelo
                        processamento do carrinho.*/}
                        <button
                            name={info._id}
                            className="remove btn btn-outline-danger">
                            REMOVER
                        </button>

                    </div>
                </div>
            </div>
        </article>
    )
}

export default CardCart