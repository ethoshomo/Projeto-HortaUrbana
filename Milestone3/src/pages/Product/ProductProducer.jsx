import React from 'react'

function ProductProducer({ producer }) {

    return (
        <>
            <div className="container-producer">
                <h5 className="product-producer-title">Quem é o produtor?</h5>
                <p className="producer-info">{producer.current.name}</p>
                <p className="producer-contact">Dados de contato:</p>
                <p className="producer-info-contact">{producer.current.email}</p>
                <p className="producer-info-contact">{producer.current.tel}</p>
            </div>
            <hr />
        </>
    )
}

export default ProductProducer