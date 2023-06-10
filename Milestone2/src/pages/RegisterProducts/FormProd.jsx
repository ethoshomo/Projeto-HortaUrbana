/* eslint-disable */
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { checkNumber, assert } from '../../hooks/utils'

import AuthConsumer from '../../hooks/auth'

import Textarea from '../../components/Form/FormTextarea'
import Input from '../../components/Form/FormInput'
import InputNumber from '../../components/Form/FormInputNumber'
import FormSelect from '../../components/Form/FormSelect'
import BtnGoBack from '../../components/Buttons/BtnGoBack'
import BtnSubmit from '../../components/Form/BtnSubmit'

import { produtos } from '../../database/database'

function FormProdutos() {

    // Cria hook consumidor de contexto para autenticação
    const [authed] = AuthConsumer()

    // Hook de navegação
    const navigate = useNavigate()

    // Cria Hooks de Estados
    const [id, setId] = useState()
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')
    const [quantidade, setQuantidade] = useState()

    // Cuida do evento de submissão
    async function handleSubmit(e) {
        e.preventDefault()
    
        const btnSubmit = document.getElementById('btnSubmitRegisterProduct')
        btnSubmit.disabled = true
    
        const fileInput = document.getElementById('inputProdImage')
    
        if (
          assert(id, 'Error: Selecione o produto.') ||
          assert(descricao, 'Error: Descrição é um campo obrigatório.') ||
          assert(fileInput.files[0], 'Error: Imagem é um campo obrigatório.') ||
          assert(preco, 'Error: Preço é um campo obrigatório.') ||
          assert(quantidade, 'Error: Quantidade é um campo obrigatório.')
        )
          return (btnSubmit.disabled = false)
        
        const _id = String(Number(produtos[produtos.length - 1]._id) + 10)

        // Cria objeto com os dados de envio
        const newProduct = {
            id,
            _id, 
            descricao,
            preco,
            quantidade,
            produtor: authed.id,
            id_produtor: authed.id
        }

        produtos.push(newProduct) 

        btnSubmit.disabled = false
    
        navigate('/produtos')
    }

    return (
        <article id="form-cadprodutos">
            <div id="formProdutos" className="text-center">
                <form>

                    <FormSelect
                        id='formSelect'
                        value={id}
                        name={'identificatorSelectProduct'}
                        onChange={setId}>
                        Nome do Produto:
                    </FormSelect>

                    <h6>Descrição Produto:</h6>

                    <Textarea
                        id='inputProductDescricao'
                        type='text'
                        value={descricao}
                        name='descricao'
                        placeholder='Descrição'
                        onChange={setDescricao}
                        rows='3'>
                        Descrição
                    </Textarea>

                    <h6>Imagem:</h6>

                    <p><input type="file" name="image" className="form-control" id="inputProdImage" placeholder="File" /></p>

                    <div className="container">
                        <div className="row">
                            <div className="col-7">

                                <h6>Preço:</h6>

                                <Input
                                    id='inputProductPrice'
                                    type='text'
                                    value={preco}
                                    name='preco'
                                    placeholder='Preço'
                                    onChange={setPreco}>
                                    Preço
                                </Input>


                            </div>
                            <div className="col-5">

                                <h6>Quantidade:</h6>

                                <InputNumber
                                    id='inputProductQuantity'
                                    value={quantidade}
                                    name='quantidade'
                                    placeholder='Quantidade'
                                    onChange={checkNumber}
                                    setChange={setQuantidade}
                                    min={1}
                                    max={50}>
                                    Quantidade
                                </InputNumber>

                            </div>
                        </div>
                    </div>

                    <BtnGoBack
                        id='btnGoBackRegisterProduct' />

                    <BtnSubmit
                        id='btnSubmitRegisterProduct'
                        handleSubmit={handleSubmit}>
                        Salvar
                    </BtnSubmit>

                </form>
            </div>
        </article>
    )
}

export default FormProdutos