import React, { useEffect, useState } from 'react'

import { users } from '../../database/database'

function CardCartInfo({ info }) {
    const [producer, setProducer] = useState('')
  
    useEffect(() => {
      const producerData = users.find((user) => user.nome === info.produtor);
      if (producerData) {
        setProducer(producerData)
      }
    }, [info.produtor])
  
    return (
      <>
        <p className="card-carrinho-text fs-4">{info.id}</p>
        <p className='card-carrinho-text'><span className='cart-card-info-product'>Estoque:</span> {info.quantidade} unidade(s)</p>
        <p className='card-carrinho-text'><span className='cart-card-info-product'>Preço:</span> R$ {Number(info.preco).toFixed(2)}</p>
        <p className='card-carrinho-text'><span className='cart-card-info-product'>Produtor:</span> {producer.nome}</p>
      </>
    )
  }
  
export default CardCartInfo