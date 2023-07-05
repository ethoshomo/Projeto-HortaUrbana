import React, { useEffect, useState } from 'react'

import { checkNumber, showMessage } from '../../hooks/utils'
import axios from 'axios'

import Textarea from '../../components/Form/FormTextarea'
import Input from '../../components/Form/FormInput'
import InputNumber from '../../components/Form/FormInputNumber'
import FormSelect from '../../components/Form/FormSelect'
import BtnGoBack from '../../components/Buttons/BtnGoBack'
import BtnSubmit from '../../components/Form/BtnSubmit'

import AuthConsumer from '../../hooks/auth'
import { useNavigate } from 'react-router'
import FormInputFile from '../../components/Form/FormInputImg'


function EditProduct({ product, loading }) {

    // Cria hook consumidor de contexto para autenticação
    const [authed] = AuthConsumer()

    // Cria hooks de estados
    const [id, setId] = useState('DEFAULT')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [imgName, setImgName] = useState('') // eslint-disable-line

    // Assim que o produto é atualizado na index,
    // libera a atualização dos dados aqui também.
    useEffect(() => {
        if (product.current) {
            setId(product.current.id)
            setDescription(product.current.description)
            setImgName(product.current.imgName)
            setPrice(product.current.price)
            setStock(product.current.stock)
        }
    }, [loading])

    // Usa hook de navegação para direcionar usuário
    const navigate = useNavigate()

    // Cuida do evento de submissão das edições realizadas
    async function handleSubmit(e) {

        // Previne o comportamento de envio do formulário
        e.preventDefault()

        // Apenas uma prevenção de erros
        if (!product.current) {
            return
        }

        // Preco é valido?
        const re = /\b[0-9]+\b/gm
        if(!re.exec(price.replace('.','').replace(',',''))){ 
            showMessage({
                success: '',
                error: 'Erro: o valor do preço possui caracteres inválidos.'
            }, true)
            return
        }

        // Seleciona o botão de enviar e o desativa
        const btnSubmit = document.getElementById('btnSubmitEditProduct')
        btnSubmit.disabled = true

        // Seleciona o input de imagem
        const fileInput = document.getElementById('inputEditProduct') 

        // Cria objeto com os dados de envio
        const url = 'http://localhost:3001/produtos'
        const object = {
            _id: product.current._id,
            id: id,
            description: description,
            price: price,
            stock: stock,
            producer: authed.email,
            oldImg: product.current.imgName
        }
        const headers = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        // Formata os dados para envio
        const formData = new FormData();
        formData.append('image', fileInput.files[0]);
        formData.append('data', JSON.stringify(object));

        try {
            // Envia dados ao backend para remeter ao banco de dados
            const { data } = await axios.put(url, formData, headers)

            // Exibe mensagens aos usuários
            showMessage(data, true)

            // Se deu certo, devolve o usuário a página de produtos
            if (data.success) navigate('/produtos')
        }
        catch(e) {

            // Exibe mensagens aos usuários
            showMessage(e.response.data, true)

            // Reativa o botão de enviar
            btnSubmit.disabled = false

        }
    }

    return (
        <div id="formProdutos" className="text-center">
            <form method="POST" encType="multipart/form-data">

                <FormSelect
                    id='formSelect'
                    value={id}
                    name={'identificatorSelectProduct'}
                    onChange={setId}>
                    Nossos Produtos:
                </FormSelect>

                <h6>Descrição do Produto:</h6>

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
                    id='inputEditProduct'
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
                                placeholder='Preço (R$)'
                                onChange={setPrice}>
                                Preço (R$)
                            </Input>
                        </div>

                        <div className="col-5">

                            <h6>Quantidade</h6>


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
                    id='BtnGoBackEditProduct' />

                <BtnSubmit
                    id='btnSubmitEditProduct'
                    handleSubmit={handleSubmit}>
                    Salvar
                </BtnSubmit>

            </form>
        </div>

    )
}

export default EditProduct