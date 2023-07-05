import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { showMessage } from '../../hooks/utils'

function User({id, name, email, tel, isAdministrator}) {
    
    // Recebe o valor de Administrador (true or false)
    const [administrator, setAdministrator] = useState (isAdministrator)

    // Função para alterar o administrador
    async function changeAdministrator(e, value){
        
        // Previne o comportamento de enviar
        e.preventDefault()

        // Verifica se é possível alterar o status do usuário.
        // Isto é, verifica se já é administrador ou não pode ser rebaixado.
        // Observação: essa função é mais complexa que o assert.
        if (administrator === value){
            toast.error( administrator ? 'O usuário já é produtor!' : 'O usuário não pode ser rebaixado!',{
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return
        }

        try {
            // Caso possa alterar o status, altera-o.
            const url = 'http://localhost:3001/usuario/administrator/'
            const object = { id, administrator: value }
            const { data } = await axios.post(url, object)
            
            // Exibe o novo status
            if (data.success) setAdministrator(value)
            
            // Exibe mensagem ao usuário
            showMessage(data, true)

        }
        catch (e) {
            // Exibe mensagens de erros aleatórios
            showMessage(e.response.data, true)
        }
    }  

    const handleDelete = async function (e){
        
        // Previne comportamento de envio do botão
        e.preventDefault()
        
        try {    
            // Chama o backend para deletar o usuário.    
            const { data } = await axios.delete(`http://localhost:3001/usuario/${id}`)
            
            // Exibe mensagem de erro ou sucesso
            showMessage(data, true)

            // Caso tenha sido bem sucedido, apaga o card.
            if (data.success) document.getElementById(id).remove()
        }
        catch (e) {
            // Exibe erros aleatórios
            showMessage(e.response.data, true)
        }
    }
    
    // Os dados do usuário foram estruturados em uma tabela.
    // Existe meio de componentizar? Sim, mas a manutenção 
    // das características de estilo e espaçamento seriam
    // seriamente prejudicadas. Por optou-se por deixar assim.
    return (
        <div id={id} className="border container container-user">
            
            <div className="row container-linha">
                <div className="col-3 text-end container-celula">Nome:</div>
                <div className="col-6 container-celula">{name}</div>
                <div className="col-2 text-start container-celula"><button onClick={(e) => {changeAdministrator(e, true)}} className="btn btn-sm btn-success btn-config">Promover</button></div>
            </div>
            
            <div className="row container-linha">
                <div className="col-3 text-end container-celula">Email:</div>
                <div className="col-6 container-celula">{email}</div>
                <div className="col-2 text-start container-celula"><button onClick={(e) => {changeAdministrator(e, false)}} className="btn btn-sm btn-warning btn-config">Rebaixar</button></div>
            </div>
            
            <div className="row container-linha">
                <div className="col-3 text-end container-celula">Telefone:</div>
                <div className="col-6 container-celula">{tel}</div>
                <div className="col-2 text-start container-celula"><button onClick={(e) => {handleDelete(e)}} className="btn btn-sm btn-danger btn-config">Deletar</button></div>
            </div>
            
            <div className="row container-linha">
                <div className="col-3 text-end">É produtor?</div>
                <div className="col-6">{administrator ? 'Sim' : 'Não'}</div>
                <div className="col-2 container-celula"></div>
            </div>

        </div>
    )
}

export default User