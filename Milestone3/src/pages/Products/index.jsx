import React, { useCallback, useEffect, useRef } from 'react'
import { axiosGet } from '../../hooks/axiosGet'
import Loading from '../../components/Loading'
import ProductSearch from './ProductSearch'

function Products() {
    
    // Cria uma referência de memória para evitar problemas
    // de sincronia entre os componentes.
    const dataRef = useRef()

    // Realiza requisição ao backend para recuperar todos 
    // produtos.
    const url = 'http://localhost:3001/produtos/'
    const [response, loading] = useCallback(axiosGet(url))
    
    // Assim que todos os dados são recuperados, atualiza
    // memória.
    useEffect(()=>{
        dataRef.current = response.data
    }, [loading])
       
    return (
        <section id="pageProducts" className="boxContent text-center">
            <h1>Lista de Produtos</h1>
            { loading ? <Loading /> : <ProductSearch data={dataRef}/>}        
        </section>
    )
}

export default Products