import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { assert, showMessage } from '../../hooks/utils'
import axios from 'axios'
import AuthConsumer from '../../hooks/auth'

import Input from '../../components/Form/FormInput'
import BtnSubmit from '../../components/Form/BtnSubmit'
import BtnGoBack from '../../components/Buttons/BtnGoBack'

function FormLogin() {

    //Cria hook de navegação
    const navigate = useNavigate()

    // Cria hook consumidor de contexto para autenticação
    const [authed, dispatch] = AuthConsumer() // eslint-disable-line

    // Cria hookes de estados dinâmicos
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Executa o submit
    async function handleSubmit(e) {

        // Previde o comportamento de envio.
        e.preventDefault()

        // Verifica variáveis obrigatórias
        if (assert(email, 'Error: Email precisa ser preenchido')) return
        if (assert(password, 'Error: Senha precisa ser preenchida.')) return

        // Desabilita botão de Submit
        const submit = document.getElementById('submitFormLogin')
        submit.disabled = true

        try {
            // Posta dados
            const url = 'http://localhost:3001/usuario/login'
            const object = { email, password }
            const { data } = await axios.post(url, object)

            //Exibe mensagem de sucesso ou erro
            showMessage(data, true)

            // Retornou sucesso? 
            if (data.success) {

                // Atualiza autenticação
                dispatch({
                    type: 'login',
                    id: data.data.id,
                    token: data.data.token,
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

                //Transfere a página para os produtos
                navigate('/produtos')
            }
        }
        catch (e) {
            // É possível a ocorrência de erros aleatórios.
            showMessage(e.response.data, true)
        }
        
        // Reabilita botão de enviar
        submit.disabled = false
    }

    const keyFunction = useCallback((e)=>{
        if (e.key === 'Enter') handleSubmit(e)
    })

    return (
        <form id="formLogin" className="text-center" onKeyDown={(e) => keyFunction(e)}>

            <Input
                id='inputLogin'
                type='email'
                value={email}
                name='email'
                placeholder='Email'
                onChange={setEmail}>
                Email
            </Input>

            <Input
                id='inputPassword'
                type='password'
                value={password}
                name='password'
                placeholder='Password'
                onChange={setPassword}>
                Senha
            </Input>

            <BtnGoBack id='Login' />

            <BtnSubmit
                id='submitFormLogin'
                handleSubmit={handleSubmit}>
                Login
            </BtnSubmit>

        </form>
    )
}

export default FormLogin