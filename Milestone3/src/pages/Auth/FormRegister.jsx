import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router'

import axios from 'axios'
import AuthConsumer from '../../hooks/auth'
import { assert, showMessage } from '../../hooks/utils'

import Input from '../../components/Form/FormInput'
import BtnSubmit from '../../components/Form/BtnSubmit'
import BtnGoBack from '../../components/Buttons/BtnGoBack'

function FormRegister() {
    // Recupera contexto de autenticação
    const [authed, dispatch] = AuthConsumer() // eslint-disable-line

    // Criar hookes de estados
    const [name, setName] = useState('')
    const [street, setStreet] = useState('')
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    // Criar hook de navegação
    const navigate = useNavigate()

    // Cuida do evento de submissão
    async function handleSubmit(e) {

        // Previne comportamento de envio
        e.preventDefault()

        // Testa campos obrigatórios
        if (assert(name, 'Erro: Nome é campo obrigatório') ||
            assert(street, 'Erro: Rua é campo obrigatório') ||
            assert(district, 'Erro: Bairro é campo obrigatório') ||
            assert(city, 'Erro: Cidade é campo obrigatório') ||
            assert(state, 'Erro: Estado é campo obrigatório') ||
            assert(tel, 'Erro: Telefone é campo obrigatório') ||
            assert(email, 'Erro: Email é campo obrigatório') ||
            assert(password, 'Erro: Senha é campo obrigatório') ||
            assert(confirm, 'Erro: Confirmação de Senha é campo obrigatório')) 
            return

        // Desabilita botão de submit
        const submit = document.getElementById("submitFormSignIn")
        submit.disabled = true
        
        try {
            // Envia os dados ao backend
            const url = 'http://localhost:3001/usuario/cadastro'
            const object = { name, street, district, city, state, tel, email, password, confirm }
            const { data } = await axios.post(url, object)

            // Exibe alertas
            showMessage(data, true)

            // Se correu tudo bem, avança para página de login
            if (data.success) {
                dispatch({
                    type: 'login',
                    id: data.data.id,
                    token: data.data.password,
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
                navigate('/produtos')
            }
        }
        catch (e) {
            
            // Exibe erros aleatórios
            showMessage(e.response.data, true)
        }

        // Caso dê errado, libera botão de submit
        submit.disabled = false

    }

    const keyFunction = useCallback((e)=>{
        if (e.key === 'Enter') handleSubmit(e)
    })

    return (
        <form className='text-center' onKeyDown={(e) => keyFunction(e)}>
            <p className='small text-start'>*Todos os campos são obrigatórios</p>

            <h6>Dados Pessoais</h6>

            <Input
                id='inputNome'
                type='text'
                value={name}
                name='name'
                placeholder='name'
                onChange={setName}>
                Nome Completo
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
                type='tel'
                value={tel}
                name='telefone'
                placeholder='Telefone'
                onChange={setTel}>
                Telefone
            </Input>

            <h6>Dados de Acesso</h6>
            <Input
                id='inputEmail'
                type='email'
                value={email}
                name='email'
                placeholder='Email'
                onChange={setEmail}>
                nome@exemplo.com.br
            </Input>

            <Input
                id='inputPasswordSign'
                type='password'
                value={password}
                name='password'
                placeholder='Senha'
                onChange={setPassword}>
                Senha
            </Input>

            <Input
                id='inputCheckPassword'
                type='password'
                value={confirm}
                name='confirm'
                placeholder='Confirmar Senha'
                onChange={setConfirm}>
                Confirmar Senha
            </Input>

            <BtnGoBack id='SignIn' />

            <BtnSubmit
                id="submitFormSignIn"
                handleSubmit={handleSubmit}>
                Cadastrar
            </BtnSubmit>
        </form>
    )
}

export default FormRegister