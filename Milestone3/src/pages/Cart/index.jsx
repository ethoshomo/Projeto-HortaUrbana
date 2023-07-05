/* eslint-disable */
import React, { useCallback, useEffect, useState } from 'react'
import { totalPriceProduct, handleAddress, assert, showMessage } from '../../hooks/utils'
import { useNavigate } from 'react-router'

import axios from 'axios'
import AuthConsumer from '../../hooks/auth'
import CartConsumer from '../../hooks/cart'

import CartList from './CartList'
import CartBoard from './CartBoard'

function Carrinho() {
  
    // Hook de navegação
    const navigate = useNavigate()

    // Recupera contextos de autenticação e carrinho
    const [authed] = AuthConsumer()
    const [cart, dispatchCart] = CartConsumer()

    // Hook de estado
    const [cardNumber, setCardNumber] = useState('')

    // Item do carrinho de compras
    const removeCard = useCallback(function (eName) {
        dispatchCart({ type: 'removeItem', id: eName })
    })

    // Verifica se o numero do cartão é numérico
    const isNumeric = useCallback(function (str) {
        const er = /^[0-9]+$/;
        return (er.test(str));
    })

    // Realiza o processamento da compra
    const processing = useCallback(async function () {

        // Verifica se todos os elementos da compra estão preenchidos
        if (assert(cart.length, 'Error: O carrinho não pode estar vazio.') ||
            assert(authed.id, 'Error: Usuário precisa estar logado no sistema.') ||
            assert(authed.street, 'Error: É necessário ter a rua cadastrada.') ||
            assert(authed.district, 'Error: É necessário ter o bairro cadastrado.') ||
            assert(authed.city, 'Error: É necessário ter a cidade cadastrada.') ||
            assert(authed.state, 'Error: É necessário ter o estado cadastrado.') ||
            assert(document.getElementById('inputNumeroCartao').value, 'Error: É necessário informar o número do cartão.') ||
            assert(isNumeric(document.getElementById('inputNumeroCartao').value), 'Error: Número do cartão possui caracteres inválidos.')) return
      
        // Cria objeto para processamento da compra no backend
        const url = 'http://localhost:3001/sales'
        const object = {
            buyerId: authed.id,
            buyerNome: authed.name,
            buyerEmail: authed.email,
            totalPrice: Number(document.getElementById('totalPrice').innerText).toFixed(2),
            totalProduct: Number(document.getElementById('totalProduct').innerText),
            paymentMethod: document.querySelector('input[name=paymentMethod]:checked').value,
            cardNumber: cardNumber,
            deliveryAddress: handleAddress(authed.street, authed.district, authed.city, authed.state),
            cart: cart
        }

        try {
            // Processa dados no BackEnd
            const { data } = await axios.post(url, object)

            // Exibe mensagem do backEnd
            showMessage(data, true)
            
            // Se foi um sucesso, esvazia o carrinho 
            // e encaminha para SOLD!
            if (data.success) {
                dispatchCart({type: 'emptyCart'})
                navigate('/sold')
            }
        }
        catch (e) {
            // Exibe erros não previstos
            showMessage(e.response.data, true)
        }
    })

    // Checa todos os clicks de mouse realizados na tela.
    const check = useCallback((e) => {
        // Captura clique
        const value = e.target

        // Caso o clique seja no botão remove, o card será 
        // removido da tela.
        if (value.className.includes('remove')) {
            removeCard(e.target.name)
        }

        // Caso ocorra alteração de total de produto,
        // promove atualização de dados decorrentes.
        else if (value.className.includes('totalProduct')) {
            setTimeout(() => {
                totalPriceProduct(cart)
            }, 400)
        }

        // Caso seja no botão de finalizar compra, promove
        // todo o processamento do dados.
        else if (value.className.includes('processing')) {
            processing()
        }
    })

    // Ao iniciar a página, cria um listener para acompanhar os
    // cliques do ponteiro do mouse. Esses cliques serão
    // monitorados pela funcao check.
    useEffect(() => {
        window.document.addEventListener('click', check)
        return () => {
            window.document.removeEventListener('click', check)
        }
    }, [check])

    
    // Atualiza o total de preço e produto de forma espontânea.    
    useEffect(() => {
        totalPriceProduct(cart)
    })

    return (
        <section id="paginaCarrinho" className="boxContent">
            <div className="containerCarrinho">
                <div className="row">

                    <div className="col-8">

                        <h4 className='carrinhoSubtitle'>Meu Carrinho</h4>
                        <CartList />

                    </div>

                    <div className="col-4">

                        <h4 className='carrinhoSubtitle'>Resumo</h4>

                        <CartBoard
                            cardNumber={cardNumber}
                            setCardNumber={setCardNumber} />

                    </div>
                </div>
            </div>
            <div id='processado'></div>
        </section>
    )
}

export default Carrinho