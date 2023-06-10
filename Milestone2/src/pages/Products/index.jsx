import React, { useCallback, useEffect, useRef } from 'react'
import Loading from '../../components/Loading'
import ProductSearch from './ProductSearch'

import { produtos } from '../../database/database'

function Products() {
    
    const dataRef = React.useRef(produtos)

    const loading = false
       
    return (
        <section id="pageProducts" className="boxContent text-center">
            <h1>Lista de Produtos</h1>
            { loading ? <Loading /> : <ProductSearch data={dataRef}/>}        
        </section>
    )
}

export default Products