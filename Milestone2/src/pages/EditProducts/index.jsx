import React, { useRef } from 'react'
import { useParams } from 'react-router'

import EditProduct from './EditProduct'
import Loading from '../../components/Loading'

import { produtos } from '../../database/database'

function EditarProd() {
    // Recupera dados transferidos por meio da rota
    let params = useParams()
  
    // Hook que reserva o endereço de memória do produto
    // Serve para sincronizar as atualizações entre
    // componentes e evitar desencontro de informações
    const productRef = useRef()
  
    const product = produtos.find((prod) => prod._id === params.id)
  
    React.useEffect(() => {
      if (product) {
        productRef.current = product
      }
    }, [product])
  
    return (
      <section id="paginaCadProdutos" className="boxContent">
        <h1>Editar Produto</h1>
        <article id="form-cadprodutos">
          {product ? (
            <EditProduct loading={false} product={productRef} />
          ) : (
            <Loading />
          )}
        </article>
      </section>
    )
  }
  
  export default EditarProd