import React from 'react'
import BtnGoBack from '../../components/Buttons/BtnGoBack'

function ProductNameImageDescription({ product }) {

    return (
        <div className="row p-2 pt-2 me-3 border rounded-3">
            
            <h1>{product.current.id}</h1>
            
            <figure>
                <img 
                    src={product.current.imgName ? 
                        '/images/' + product.current.imgName 
                        : 
                        '/images/none.png'} 
                    className="card-img-top img-fluid" 
                    alt={product.current.id} />
            </figure>
                        
            <div className="product-description">Descrição: </div> 
            
            <span>{product.current.description}</span>

            <p className='text-center'>
                <BtnGoBack id='ProductGoBack' />
            </p>
        </div>
    )
}

export default ProductNameImageDescription