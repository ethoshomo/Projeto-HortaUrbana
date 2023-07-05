/* eslint-disable */
import React, { useCallback, useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading'
import LoadProducer from './LoadProducer'
import axios from 'axios'

function Product() {
    
    // Cria hooks de parâmetros, de referência e de estado
    const params = useParams()
    const productRef = useRef()
    const [product, setProduct] = useState('')
    
    // Busca e seleção dos dados do produto     
    const getProduct = useCallback(async function(){
        try {
            const urlProduct = 'http://localhost:3001/produtos/' + params.id
            const { data } = await axios.get(urlProduct)
            if (data) {
                setProduct(data.data)
                productRef.current = data.data
            }
        }
        catch(e){
            console.error(e)
        }
        
    })

    // Executa apenas uma única vez a função de busca do produto.
    useEffect(() => {
        getProduct()
    }, [])

    return (
        <section id="paginaProduto" className="boxContent">
            <h1>Produto</h1>
            { !product && <Loading />}
            { !!product && <LoadProducer product={productRef} />}
        </section>
    )
}

export default Product