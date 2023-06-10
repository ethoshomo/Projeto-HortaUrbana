import React, { useState } from 'react'
import { useNavigate } from 'react-router'

import AuthConsumer from '../../hooks/auth'
import { assert } from '../../hooks/utils'

import Input from '../../components/Form/FormInput'
import BtnSubmit from '../../components/Form/BtnSubmit'
import BtnGoBack from '../../components/Buttons/BtnGoBack'

import { users } from '../../database/database'

function FormCad() {
    // Recupera contexto de autenticação
    const [authed, dispatch] = AuthConsumer() // eslint-disable-line

    // Criar hookes de estados
    const [nome, setNome] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
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
        if (assert(nome, 'Erro: Nome é campo obrigatório')) return
        if (assert(rua, 'Erro: Rua é campo obrigatório')) return
        if (assert(bairro, 'Erro: Bairro é campo obrigatório')) return
        if (assert(cidade, 'Erro: Cidade é campo obrigatório')) return
        if (assert(estado, 'Erro: Estado é campo obrigatório')) return
        if (assert(tel, 'Erro: Telefone é campo obrigatório')) return
        if (assert(email, 'Erro: Email é campo obrigatório')) return
        if (assert(password, 'Erro: Senha é campo obrigatório')) return
        if (assert(confirm, 'Erro: Confirmação de Senha é campo obrigatório')) return
      
        // Desabilita botão de submit
        const submit = document.getElementById('submitFormSignIn')
        submit.disabled = true
      
        try {
            const userExists = users.some((user) => user.email === email)
            if (userExists) {
                return
            }
          
            const lastUser = users[users.length - 1]

            const newId = parseInt(lastUser.token, 10) + 1

            const newUser = {
                id: newId.toString(),
                token: newId.toString(),
                nome: nome,
                rua: rua,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                tel: tel,
                isAdministrator: false,
                isAdmin: false,
                email: email,
                password: password,
            }
      
            users.push(newUser)
      
            // Atualiza autenticação
            dispatch({
                type: 'login',
                id: newUser.id,
                token: newUser.token,
                nome: newUser.nome,
                rua: newUser.rua,
                bairro: newUser.bairro,
                cidade: newUser.cidade,
                estado: newUser.estado,
                tel: newUser.tel,
                isAdministrator: newUser.isAdministrator,
                isAdmin: newUser.isAdmin,
                email: newUser.email,
            })
      
            // Transfere a página para os produtos
             navigate('/produtos')
        } catch (e) {
            console.log(e)
        }
      
        // Caso dê errado, libera botão de submit
        submit.disabled = false
    }

    return (
        <form className='text-center'>
            <p className='small text-start'>*Todos os campos são obrigatórios</p>

            <h6>Dados Pessoais</h6>

            <Input
                id='inputNome'
                type='text'
                value={nome}
                name='nome'
                placeholder='Nome'
                onChange={setNome}>
                Nome Completo
            </Input>

            <h6>Endereço</h6>

            <Input
                id='inputRua'
                type='text'
                value={rua}
                name='rua'
                placeholder='Rua'
                onChange={setRua}>
                Rua
            </Input>

            <Input
                id='inputBairro'
                type='text'
                value={bairro}
                name='bairro'
                placeholder='Bairro'
                onChange={setBairro}>
                Bairro
            </Input>

            <Input
                id='inputCidade'
                type='text'
                value={cidade}
                name='cidade'
                placeholder='cidade'
                onChange={setCidade}>
                Cidade
            </Input>

            <Input
                id='inputEstado'
                type='text'
                value={estado}
                name='estado'
                placeholder='Estado'
                onChange={setEstado}>
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

export default FormCad