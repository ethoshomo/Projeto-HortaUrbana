import React from 'react'

import axios from 'axios'
import { showMessage } from '../../hooks/utils'

import AuthConsumer from '../../hooks/auth'
import CartConsumer from '../../hooks/cart'
import CardFigure from './CardFigure'
import CardDescription from './CardDescription'
import CardFooter from './CardFooter'
import CardEditor from './CardEditor'

function Card({ info, list }) {

    // Cria hook consumidor de contexto para autenticação e carrinho
    const [authed] = AuthConsumer()
    const [cart, dispatchCart] = CartConsumer() // eslint-disable-line


    // Cuida de adicionar produtos no carrinho
    function handleCart(e, info) {

        // Previne o comportamento de envio
        e.preventDefault()

        // Adiciona no carrinho e mostra mensagem
        try {
            dispatchCart({ type: 'addCart', product: info })
            showMessage({
                success: 'Sucesso: Produto adicionado no carrinho!',
                error: ''
            }, true)
        }
        catch (e) {
            showMessage({
                success: '',
                error: 'Erro: Erro ao adicionar produto no carrinho.'
            }, true)
        }
    }

    // Cuida do evento de deletar o produto do banco de dados
    async function handleDelete(e) {

        //Previne o comportamento de submit
        e.preventDefault()

        // Deleta o produto do banco de dados
        const { data } = await axios.delete(`http://localhost:3001/produtos/${info._id}`)
        showMessage(data, true)

        // Em caso de sucesso, atualiza o carrinho e remove o card da tela
        if (data.success) {
            dispatchCart({ type: 'removeItem', id: info._id })
            document.getElementById(info._id).remove()
            list = list.filter(p => p._id !== info._id)
        }
    }

    return (
        <article id={info._id} className="card d-inline-flex card-container">

            <CardFigure
                imgName={info.imgName}
                id={info.id} />

            <CardDescription
                price={info.price}
                stock={info.stock} />

            <CardFooter
                id={info._id}
                info={info}
                onClick={handleCart} />

            {!authed.isAdmin &&
                authed.isAdministrator &&
                authed.id === info.producer &&
                (<CardEditor
                    id={info._id}
                    onDelete={handleDelete} />
                )
            }

            {authed.isAdmin &&
                (<CardEditor
                    id={info._id}
                    onDelete={handleDelete} />
                )
            }

        </article>
    )
}

export default Card