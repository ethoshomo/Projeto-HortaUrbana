import React, { useEffect, useCallback, useRef, useState } from 'react'
import axios from 'axios'
import Loading from '../../components/Loading'
import Product from './Product'

function LoadProducer({ product }) {
    
    // Cria hooks de produtos
    const producerRef = useRef()
    const [producer, setProducer] = useState('')

    // Busca e seleção dos dados do produto     
    const getProducer = useCallback(async function () {
        try{
            const url = 'http://localhost:3001/usuario/' + product.current.producer
            const { data } = await axios.get(url)
            setProducer(data.data)
            producerRef.current = data.data
        }
        catch(e){
            console.error(e)
        }
    })

    // Executa apenas uma única vez a recuperação do produtor
    useEffect(() => {
        getProducer()
    }, [])

    return (
        <>
            {!producer && <Loading />}
            {!!producer && <Product producer={producerRef} product={product} />}
        </>
    )
}

export default LoadProducer