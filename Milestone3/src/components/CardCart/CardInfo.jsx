import React, { useCallback, useEffect, useState } from 'react'
import { axiosGet } from '../../hooks/axiosGet'


function CardCartInfo({ info }) {
// Variaveis de controle da lista de usuários
const [producer, setProducer] = useState('')

// Faz uma busca de dados no servidor
const url = 'http://localhost:3001/usuario/'+info.producer
const [response, loading] = useCallback(axiosGet(url))

// Quando recebe requisição do servidor, atualiza
// lista de usuários
useEffect(()=>{
    if (response){
        const { data } = response
        setProducer(data)
    }
}, [loading])

    return (
        <>
            <p className="card-carrinho-text fs-4">{info.id}</p>
            <p className='card-carrinho-text'><span className='cart-card-info-product'>Estoque:</span> {info.stock} unidade(s)</p>
            <p className='card-carrinho-text'><span className='cart-card-info-product'>Preço:</span> R$ {Number(info.price).toFixed(2)}</p>
            <p className='card-carrinho-text'><span className='cart-card-info-product'>Produtor:</span> {producer.name}</p>
        </>
    )
}
export default CardCartInfo