import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { assert } from '../../hooks/utils'
import AuthConsumer from '../../hooks/auth'

import Input from '../../components/Form/FormInput'
import BtnSubmit from '../../components/Form/BtnSubmit'
import BtnGoBack from '../../components/Buttons/BtnGoBack'

import { users } from '../../database/database'

function FormLogin() {

    // Cria hook de navegação
    const navigate = useNavigate()

    // Cria hook consumidor de contexto para autenticação
    const [authed, dispatch] = AuthConsumer() // eslint-disable-line

    // Cria hookes de estados dinâmicos
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        // Previde o comportamento de envio.
        e.preventDefault()
      
        // Verifica variáveis obrigatórias
        if (assert(email, 'Error: Email precisa ser preenchido')) return
        if (assert(password, 'Error: Senha precisa ser preenchida.')) return
      
        // Desabilita botão de Submit
        const submit = document.getElementById('submitFormLogin')
        submit.disabled = true
      
        try {
          // Find user by email and password in the users array
          const user = users.find(
            (user) => user.email === email && user.password === password
          )
      
          if (user) {
            // Atualiza autenticação
            dispatch({
              type: 'login',
              id: user.id,
              token: user.token,
              nome: user.nome,
              rua: user.rua,
              bairro: user.bairro,
              cidade: user.cidade,
              estado: user.estado,
              tel: user.tel,
              isAdministrator: user.isAdministrator,
              isAdmin: user.isAdmin,
              email: user.email,
            })
      
            // Transfere a página para os produtos
            navigate('/produtos')
          } 
        } catch (e) {
          console.log('Erro')
        }
      
        // Reabilita botão de enviar
        submit.disabled = false
      }
      

    return (
        <form className="text-center">

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