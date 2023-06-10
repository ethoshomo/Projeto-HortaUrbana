import React from 'react'
import BtnGoBack from '../../components/Buttons/BtnGoBack'

function ProductNameImageDescription({ product }) {

    return (
        <div className="row p-2 pt-2 me-3 border rounded-3">
            
            <h1>{product.id}</h1>
            
            <figure>
                <img 
                    src={ '/images/' + product.imgName } 
                    className="card-img-top img-fluid" 
                    alt={product.id} />
            </figure>
            
            <p>
                <span className="product-description">Descrição:</span> 
                {product.descricao}
            </p>
            
            <p className='text-center'>
                <BtnGoBack id='ProductGoBack' />
            </p>
        </div>
    )
}

export default ProductNameImageDescription