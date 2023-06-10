import React from 'react'

function CardFigure({ imgName, id }) {

    return (
        <figure>
            <img src={imgName ? 'images/' + imgName : 'images/none.png'} 
                className="card-img-top img-fluid img-limitation" 
                alt={id} 
                />
            <figcaption>
                <h5 className="card-title-product">{id}</h5>
            </figcaption>
        </figure>
    )
}
export default CardFigure