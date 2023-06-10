import React from 'react'

function CardDescription({ price, stock }) {

    return (
        <div className="card-description">
            <p className="card-text-info"><span className="card-points">Preço</span>: R$ {Number(price).toFixed(2)}</p>
            <p className="card-text-info"><span className="card-points">Estoque</span>: {stock} unidades</p>
        </div>
    )
}
export default CardDescription