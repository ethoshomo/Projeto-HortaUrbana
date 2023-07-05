import React, { useCallback, useEffect, useState } from 'react'
import { axiosGet } from '../../hooks/axiosGet'
import User from './User'
import Loading from '../../components/Loading'

function AuthorizeProducer(){

    // Variaveis de controle da lista de usuários
    const [producers, setProducers] = useState()

    // Faz uma busca de dados no servidor
    const url = 'http://localhost:3001/usuario/'
    const [response, loading] = useCallback(axiosGet(url))

    // Quando recebe requisição do servidor, atualiza
    // lista de usuários
    useEffect(()=>{
        if (response){
            const { data } = response
            setProducers(data)
        }
    }, [loading])

    return (
        <section id="pag-autorizar-produtores" className="boxContent">
            <h1>Administrar Usuários</h1>
            <article id="list-users">

                { loading ? 
                    
                    <Loading /> : 
                    
                    producers ? 
                    
                        (producers.map(producer => {
                        
                        // Precisamos descartar
                        if (producer.isAdmin){
                            return null
                        }

                        return <User 
                            key={producer._id} 
                            id={producer._id} 
                            name={producer.name} 
                            email={producer.email} 
                            tel={producer.tel} 
                            isAdministrator={producer.isAdministrator}/>
                        })) 
                        
                        : 
                        
                        ('Não há produtores cadastrados!')
                }

            </article>
        </section>
    )
}

export default AuthorizeProducer