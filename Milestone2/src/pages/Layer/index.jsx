import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

// Componentes do Layout do Site
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Copyright from '../../components/Copyright'
import Favicon from 'react-favicon'
import AuthConsumer from '../../hooks/auth'

//Importando dados
import { users } from '../../database/database'

// Único CSS que o site inteiro importa.
import '../../css/style.min.css'

function App() {
    
    //Hook de navegação
    const navigate = useNavigate()

    // Cria hook consumidor de contexto para autenticação
    const [authed, dispatch] = AuthConsumer() // eslint-disable-line

    // Trata-se de uma checagem para garantir a persistência do
    // usuário logado no sistema. Desse modo, um token será 
    // armazenado localmente para que a sessão seja continuada.
    const checkLogin = async function() {

        // Verifica a existência do token
        const token = localStorage.getItem('token')

        // Se existir, consulta a base de dados para verificar
        // se ele é válido.
        if (token) {
            for(let data of users){
                if (token === data.token){
                    dispatch({
                        type: 'login',
                        id: data.id,
                        token: data.token,
                        nome: data.nome,
                        rua: data.rua,
                        bairro: data.bairro,
                        cidade: data.cidade,
                        estado: data.estado,
                        tel: data.tel,
                        isAdministrator: data.isAdministrator,
                        isAdmin: data.isAdmin,
                        email: data.email
                    })
                    navigate('/produtos')    
                }
            }
        }
    }

    // Executa a checagem de login anterior.
    useEffect(() => { 
        checkLogin() 
    }, [])

    return (
        <>
            <ToastContainer />
            <Favicon url="/images/favicon.ico" />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <Copyright />
        </>
    )
}

export default App