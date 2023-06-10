import React from 'react'

function ProductStockPrice({ product }) {

    return (
        <>
            <p><span className="product-stock">Em estoque | {product.quantidade} unid. </span></p>
            <p className="product-price">R$ {Number(product.preco).toFixed(2)}</p>
            <hr />
        </>
    )
}

export default ProductStockPrice