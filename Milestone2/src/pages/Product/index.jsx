/* eslint-disable */
import React, { useCallback, useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading'
import LoadProduct from '../Product/LoadProduct'

import { produtos } from '../../database/database'

function Produto() {
    const params = useParams()
    const productRef = useRef()
    const [product, setProduct] = useState('')
    
    const getProduct = useCallback(() => {
        
        for (let p of produtos) {
            if (p._id === params.id) {
                setProduct(p)
                productRef.current = p
            }
        }
    }, [params.id])

    useEffect(() => {
        getProduct()
    }, [getProduct])

    return (
        <section id="paginaProduto" className="boxContent">
            <h1>Produto</h1>
            { !product && <Loading />}
            { !!product && <LoadProduct product={product} />}
        </section>
    )
}


export default Produto