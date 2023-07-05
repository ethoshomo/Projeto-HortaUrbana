import React, { useEffect, useCallback, useRef } from 'react'
import { useParams } from 'react-router'
import { axiosGet } from '../../hooks/axiosGet'

import EditProduct from './EditProduct'
import Loading from '../../components/Loading'

function EditarProd(){
    
    // Recupera dados transferidos por meio da rota
    let params = useParams()

    // Hook que reserva o endereço de memória do produto
    // Serve para sincronizar as atualizações entre
    // componentes e evitar desencontro de informações
    const productRef = useRef()

    // Recupera informações do produto em específico
    const url = 'http://localhost:3001/produtos/' + params.id
    const [response, loading] = useCallback(axiosGet(url))
    
    // Assim que o produto é recebido do backend, atualiza
    // a referência de memória do produto
    useEffect(()=>{
        if (response.success) {
            productRef.current = response.data
        }
    },[loading])

    return (
        <section id="paginaCadProdutos" className="boxContent">
            <h1>Editar Produto</h1>
            <article id="form-cadprodutos">
                { loading && <Loading />}
                { !loading && <EditProduct loading={loading} product={productRef}/> }
            </article>
        </section>
    )
}

export default EditarProd