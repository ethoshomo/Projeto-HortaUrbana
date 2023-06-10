import React from 'react'
import AuthTab from './AuthTab'

function Autenticacao() {
    return (
        <section id="paginaAutenticacao" className="boxContent">
            <div className="content w-75">
                <h1>Autenticação</h1>
                <p className="text-center">Faça seu login para usufruir dos benefícios do site! Caso não tenha login, basta cadastrar: é de graça!!</p>
                <AuthTab />  
            </div>
        </section>
    )
}

export default Autenticacao
