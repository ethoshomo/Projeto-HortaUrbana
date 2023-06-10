import React, { useEffect, useState } from 'react'

import { checkNumber } from '../../hooks/utils'

import Textarea from '../../components/Form/FormTextarea'
import Input from '../../components/Form/FormInput'
import InputNumber from '../../components/Form/FormInputNumber'
import FormSelect from '../../components/Form/FormSelect'
import BtnGoBack from '../../components/Buttons/BtnGoBack'
import BtnSubmit from '../../components/Form/BtnSubmit'

import AuthConsumer from '../../hooks/auth'
import { useNavigate } from 'react-router'

import { produtos } from '../../database/database'

function EditProduct({ product, loading }) {
    // Cria hook consumidor de contexto para autenticação
    const [authed] = AuthConsumer()
  
    // Cria hooks de estados
    const [id, setId] = useState('DEFAULT')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')
    const [quantidade, setQuantidade] = useState('')
  
    // Assim que o produto é atualizado na index,
    // libera a atualização dos dados aqui também.
    useEffect(() => {
      if (product.current) {
        setId(product.current.id)
        setDescricao(product.current.descricao)
        setPreco(product.current.preco)
        setQuantidade(product.current.quantidade)
      }
    }, [loading])
  
    // Usa hook de navegação para direcionar usuário
    const navigate = useNavigate()
  
    // Cuida do evento de submissão das edições realizadas
    function handleSubmit(e) {
      // Previne o comportamento de envio do formulário
      e.preventDefault()

      // Apenas uma prevenção de erros
      if (!product.current) {
        return
      }
  
      // Seleciona o botão de enviar e o desativa
      const btnSubmit = document.getElementById('btnSubmitEditProduct')
      btnSubmit.disabled = true
  
      // Encontra o produto atual nos dados de produtos
      const productIndex = produtos.findIndex((p) => p._id === product.current._id)
  
      if (productIndex !== -1) {
        // Atualiza o produto com os novos dados
        produtos[productIndex] = {
          ...produtos[productIndex],
          id,
          descricao,
          preco,
          quantidade,
          produtor: authed.email,
        }
  
        // Se deu certo, devolve o usuário a página de produtos
        navigate('/produtos')
      } 
  
      // Reativa o botão de enviar
      btnSubmit.disabled = false
    }
  
    return (
      <div id="formProdutos" className="text-center">
        <form method="POST" encType="multipart/form-data">
          <FormSelect id="formSelect" value={id} name={'identificatorSelectProduct'} onChange={setId}>
            Nossos Produtos:
          </FormSelect>
  
          <h6>Descrição do Produto:</h6>
  
          <Textarea
            id="inputProductDescricao"
            type="text"
            value={descricao}
            name="descricao"
            placeholder="Descrição"
            onChange={setDescricao}
            rows="3"
          >
            Descrição
          </Textarea>
  
          <div className="container">
            <div className="row">
              <div className="col-7">
                <h6>Preço:</h6>
                <Input
                  id="inputProductPrice"
                  type="text"
                  value={preco}
                  name="preco"
                  placeholder="Preço (R$)"
                  onChange={setPreco}
                >
                  Preço (R$)
                </Input>
              </div>
  
              <div className="col-5">
                <h6>Quantidade</h6>
                <InputNumber
                  id="inputProductQuantity"
                  value={quantidade}
                  name="quantidade"
                  placeholder="Quantidade"
                  onChange={checkNumber}
                  setChange={setQuantidade}
                  min={1}
                  max={50}
                >
                  Quantidade
                </InputNumber>
              </div>
            </div>
          </div>
  
          <BtnGoBack id="BtnGoBackEditProduct" />
          <BtnSubmit id="btnSubmitEditProduct" handleSubmit={handleSubmit}>
            Salvar
          </BtnSubmit>
        </form>
      </div>
    )
  }
  
  export default EditProduct