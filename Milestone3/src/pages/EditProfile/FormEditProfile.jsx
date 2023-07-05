import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { showMessage } from '../../hooks/utils'
import axios from 'axios'

import BtnGoBack from '../../components/Buttons/BtnGoBack'
import BtnSubmit from '../../components/Form/BtnSubmit'
import Input from '../../components/Form/FormInput'

import AuthConsumer from '../../hooks/auth'


function FormCad() {
    
    // Cria hook consumidor de contexto para autenticação
    // eslint-disable-next-line
    const [authed, dispatch] = AuthConsumer()

    // Criar hooks de estados
    const [name, setName] = useState(authed.name || '')
    const [street, setStreet] = useState(authed.street || '')
    const [district, setDistrict] = useState(authed.district || '')
    const [city, setCity] = useState(authed.city || '')
    const [state, setState] = useState(authed.state || '')
    const [tel, setTel] = useState(authed.tel || '')

    // Criar hook de navegação
    const navigate = useNavigate()

    // Cuida do evento de submissão
    async function handleSubmit(e) {

        // Previne o comportamento de envio
        e.preventDefault()

        try {
            // Realiza o update do banco de dados
            const url = 'http://localhost:3001/usuario/edit'
            const object = { name, street, district, city, state, tel, id: authed.id }
            const { data } = await axios.put(url, object)

            // Exibe mensagem ao usuário
            showMessage(data, true)

            // Caso tenha sido um sucesso
            if (data.success) {

                // Atualiza o login
                dispatch({
                    type: 'loginUpdate',
                    auth: true,
                    id: data.data._id,
                    name: data.data.name,
                    street: data.data.street,
                    district: data.data.district,
                    city: data.data.city,
                    state: data.data.state,
                    tel: data.data.tel,
                    isAdministrator: data.data.isAdministrator,
                    isAdmin: data.data.isAdmin,
                    email: data.data.email
                })

                // Leva o usuário a página de produtos
                navigate(0)
            }
        }
        catch (e) {
            // Intercepta erros inesperados
            console.error(e.data.response)
        }
    }

    return (
        <form className="text-center">

            <h6>Dados Pessoais</h6>

            <Input
                id='inputNome'
                type='text'
                value={name}
                name='name'
                placeholder='name'
                onChange={setName}>
                Nome
            </Input>

            <h6>Endereço</h6>

            <Input
                id='inputRua'
                type='text'
                value={street}
                name='street'
                placeholder='street'
                onChange={setStreet}>
                Rua
            </Input>

            <Input
                id='inputBairro'
                type='text'
                value={district}
                name='district'
                placeholder='district'
                onChange={setDistrict}>
                Bairro
            </Input>

            <Input
                id='inputCidade'
                type='text'
                value={city}
                name='city'
                placeholder='city'
                onChange={setCity}>
                Cidade
            </Input>

            <Input
                id='inputEstado'
                type='text'
                value={state}
                name='state'
                placeholder='state'
                onChange={setState}>
                Estado
            </Input>


            <h6>Telefone</h6>

            <Input
                id='inputTel'
                type='text'
                value={tel}
                name='tel'
                placeholder='tel'
                onChange={setTel}>
                Telefone
            </Input>

            <BtnGoBack id='formEditProfile' />
            <BtnSubmit
                id='submitFormEditProfile'
                handleSubmit={handleSubmit}>
                Salvar
            </BtnSubmit>
        </form>
    )
}

export default FormCad