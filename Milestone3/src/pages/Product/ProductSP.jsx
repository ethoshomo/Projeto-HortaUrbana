import React from 'react'

function ProductStockPrice({ product }) {

    return (
        <>
            <p><span className="product-stock">Em estoque | {product.current.stock} unid. </span></p>
            <p className="product-price">R$ {Number(product.current.price).toFixed(2)}</p>
            <hr />
        </>
    )
}

export default ProductStockPrice