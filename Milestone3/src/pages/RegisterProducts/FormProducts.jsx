/* eslint-disable */
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { checkNumber, showMessage, assert } from '../../hooks/utils'

import axios from 'axios'
import AuthConsumer from '../../hooks/auth'

import Textarea from '../../components/Form/FormTextarea'
import Input from '../../components/Form/FormInput'
import InputNumber from '../../components/Form/FormInputNumber'
import FormInputFile from '../../components/Form/FormInputImg'
import FormSelect from '../../components/Form/FormSelect'
import BtnGoBack from '../../components/Buttons/BtnGoBack'
import BtnSubmit from '../../components/Form/BtnSubmit'


function FormProducts() {

    // Cria hook consumidor de contexto para autenticação
    const [authed] = AuthConsumer()

    // Hook de navegação
    const navigate = useNavigate()

    // Cria Hooks de Estados
    const [id, setId] = useState()
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('1')

    // Cuida do evento de submissão
    async function handleSubmit(e) {

        // Previne o comportamento esperado do formulário
        e.preventDefault()

        // Seleciona o botão de enviar e o desativa
        const btnSubmit = document.getElementById('btnSubmitRegisterProduct')
        btnSubmit.disabled = true

        // Seleciona o input do arquivo
        const fileInput = document.getElementById('inputProdImage');

        // Verifica dados
        if (assert(id, 'Error: Selecione o produto.') ||
            assert(description, 'Error: Descrição é um campo obrigatório.') ||
            assert(fileInput.files[0], 'Error: Imagem é um campo obrigatório.') ||
            assert(price, 'Error: Preço é um campo obrigatório.') ||
            assert(stock, 'Error: Quantidade é um campo obrigatório.'))
            return btnSubmit.disabled = false

        // Cria objeto com os dados de envio
        const product = {
            id,
            description,
            price,
            stock,
            producer: authed.id
        }

        // Formata os dados para envio
        const formData = new FormData();
        formData.append('image', fileInput.files[0]);
        formData.append('data', JSON.stringify(product));

        // Prepara outras variáveis
        const url = 'http://localhost:3001/produtos'
        const headers = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        try {
            // Envia os arquivos
            const { data } = await axios.post(url, formData, headers)

            // Exibe mensagem ao usuário
            showMessage(data, true)

            // Reativa o botão de enviar
            btnSubmit.disabled = false

            // Em caso de sucesso, redireciona o usuário
            // para os produtos.
            if (data.success) navigate('/produtos')
        }
        catch (e) {
            
            // Exibe mensagens aos usuários
            showMessage(e.response.data, true)

            // Reativa o botão de enviar
            btnSubmit.disabled = false
        }
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
                        value={description}
                        name='description'
                        placeholder='Descrição'
                        onChange={setDescription}
                        rows='3'>
                        Descrição
                    </Textarea>

                    <h6>Imagem:</h6>

                    <FormInputFile 
                        id='inputProdImage'
                        name='image'
                        accept='image'
                        placeholder='File'/>

                    <div className="container">
                        <div className="row">
                            <div className="col-7">

                                <h6>Preço:</h6>

                                <Input
                                    id='inputProductPrice'
                                    type='text'
                                    value={price}
                                    name='price'
                                    placeholder='Preço'
                                    onChange={setPrice}>
                                    Preço
                                </Input>


                            </div>
                            <div className="col-5">

                                <h6>Quantidade:</h6>

                                <InputNumber
                                    id='inputProductQuantity'
                                    value={stock}
                                    name='stock'
                                    placeholder='stock'
                                    onChange={checkNumber}
                                    setChange={setStock}
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

export default FormProducts