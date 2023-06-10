import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { showMessage } from '../../hooks/utils'

import BtnGoBack from '../../components/Buttons/BtnGoBack'
import BtnSubmit from '../../components/Form/BtnSubmit'
import Input from '../../components/Form/FormInput'

import AuthConsumer from '../../hooks/auth'

import { users } from '../../database/database'

function FormCad() {
    // Cria hook consumidor de contexto para autenticação
    // eslint-disable-next-line
    const [authed, dispatch] = AuthConsumer()
  
    // Criar hooks de estados
    const [nome, setNome] = useState(authed.nome || '')
    const [rua, setRua] = useState(authed.rua || '')
    const [bairro, setBairro] = useState(authed.bairro || '')
    const [cidade, setCidade] = useState(authed.cidade || '')
    const [estado, setEstado] = useState(authed.estado || '')
    const [tel, setTel] = useState(authed.tel || '')
  
    // Criar hook de navegação
    const navigate = useNavigate()
  
    // Cuida do evento de submissão
    async function handleSubmit(e) {
      // Previne o comportamento de envio
      e.preventDefault()
  
      try {
        const updatedUser = {
          ...authed,
          nome,
          rua,
          bairro,
          cidade,
          estado,
          tel,
        }
  
        const updatedUsers = users.map(user =>
          user.id === updatedUser.id ? updatedUser : user
        )
  
        // Atualiza o login
        dispatch({
          type: 'loginUpdate',
          auth: true,
          id: updatedUser.id,
          nome: updatedUser.nome,
          rua: updatedUser.rua,
          bairro: updatedUser.bairro,
          cidade: updatedUser.cidade,
          estado: updatedUser.estado,
          tel: updatedUser.tel,
          isAdministrator: updatedUser.isAdministrator,
          isAdmin: updatedUser.isAdmin,
          email: updatedUser.email,
        })
  
        // Leva o usuário a página de produtos
        navigate('/produtos')
      } catch (e) {
        // Intercepta erros inesperados
        console.error(e)
      }
    }
  
    return (
      <form className="text-center">
        <h6>Dados Pessoais</h6>
  
        <Input
          id="inputNome"
          type="text"
          value={nome}
          name="nome"
          placeholder="Nome"
          onChange={setNome}
        >
          Nome
        </Input>
  
        <h6>Endereço</h6>
  
        <Input
          id="inputRua"
          type="text"
          value={rua}
          name="rua"
          placeholder="Rua"
          onChange={setRua}
        >
          Rua
        </Input>
  
        <Input
          id="inputBairro"
          type="text"
          value={bairro}
          name="bairro"
          placeholder="Bairro"
          onChange={setBairro}
        >
          Bairro
        </Input>
  
        <Input
          id="inputCidade"
          type="text"
          value={cidade}
          name="cidade"
          placeholder="Cidade"
          onChange={setCidade}
        >
          Cidade
        </Input>
  
        <Input
          id="inputEstado"
          type="text"
          value={estado}
          name="estado"
          placeholder="Estado"
          onChange={setEstado}
        >
          Estado
        </Input>
  
        <h6>Telefone</h6>
  
        <Input
          id="inputTel"
          type="text"
          value={tel}
          name="tel"
          placeholder="tel"
          onChange={setTel}
        >
          Telefone
        </Input>
  
        <BtnGoBack id="formEditProfile" />
        <BtnSubmit id="submitFormEditProfile" handleSubmit={handleSubmit}>
          Salvar
        </BtnSubmit>
      </form>
    )
  }
  
  export default FormCad