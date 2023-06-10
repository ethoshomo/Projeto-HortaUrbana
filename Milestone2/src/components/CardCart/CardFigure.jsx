import React from 'react'

function CardCartFigure({ info }) {
    return (
        <figure>
            <img src={info.imgName ? '/images/' + info.imgName : '/images/none.png'}
                className="img-fluid card-carrinho-img img-border-limitation"
                alt={info.id} />
        </figure>
    )
}
export default CardCartFigure