import React, { useEffect, useCallback, useRef, useState } from 'react'
import Loading from '../../components/Loading'
import Product from './Product'

import { users } from '../../database/database'

function LoadProduct({ product }) {
    const producerRef = useRef()
    const [producer, setProducer] = useState('')

    const getProducer = useCallback(() => {
        for (let u of users) {

            if (u.id === product.id_produtor) {
                setProducer(u)
                producerRef.current = u
            }
        }
    }, [product])

    useEffect(() => {
        getProducer()
    }, [getProducer])

    return (
        <>
            {!producer && <Loading />}
            {!!producer && <Product producer={producerRef} product={product} />}
        </>
    )
}

export default LoadProduct