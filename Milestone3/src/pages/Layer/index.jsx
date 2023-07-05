import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import axios from 'axios'

// Componentes do Layout do Site
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Favicon from 'react-favicon'
import AuthConsumer from '../../hooks/auth'

// Único CSS que o site inteiro importa.
import '../../css/style.min.css'
import './layer.css'

function App() {

    //Hook de navegação
    const navigate = useNavigate()

    // Cria hook consumidor de contexto para autenticação
    const [authed, dispatch] = AuthConsumer() // eslint-disable-line

    // Trata-se de uma checagem para garantir a persistência do
    // usuário logado no sistema. Desse modo, um token será 
    // armazenado localmente para que a sessão seja continuada.
    const checkLogin = async function () {

        // Verifica a existência do token
        const token = localStorage.getItem('token')

        // Se existir, consulta a base de dados para verificar
        // se ele é válido.
        if (token) {
            const url = 'http://localhost:3001/usuario/'
            const object = { token: token }
            try {
                const { data } = await axios.post(url, object)

                // Caso seja válido, libera autenticação e
                // redireciona o usuário para a tela de produtos.
                if (data.success) {

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

                    navigate('/produtos')
                }
            }
            catch (e) {
                console.error('Ocorreu algum problema com o servidor. Checar conexão.')
            }
        }
    }

    // Executa a checagem de login anterior.
    useEffect(() => {
        checkLogin()
    }, [])

    return (
        <div className='container-root'>
            <ToastContainer />
            <Favicon url="/images/favicon.ico" />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default App