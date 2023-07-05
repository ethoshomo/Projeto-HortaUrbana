/* eslint-disable */
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { showMessage } from './utils'

// Verifica se dois objetos são iguais
const equalObject = (objA, objB) => {
    return JSON.stringify(objA) === JSON.stringify(objB)
}

export function axiosGet(url){
    // Criar estados de refresh, resultados e loading
    const [refresh, setRefresh] = useState(false)
    const [result, setResult] = useState(false)
    const [loading, setLoading] = useState(false)

    // Precisamos garantir que url e options não mudaram
    const urlRef = useRef(url)

    // Assistir as variáveis de entrada para verificar alteração
    // Ref não muda entre as renderizações, mesmo que parâmetros
    // tenham mudado. Ou seja, precisa fazer manualmente.
    useEffect(()=>{

        // Flag para disparar atualização
        let changed = false;
        
        // Compara se a URL alterou
        if (!equalObject(url, urlRef.current)){
            urlRef.current = url
            changed = true
        }

        // Se alterou qualquer deles, dispara atualização
        if (changed){
            setRefresh((state) => !state)
        }
    }, [url])

    // Atualiza se precisar!
    useEffect(()=>{

        // Criando estado de loading
        setLoading(true)

        // Busca dados de forma assincrona
        const fetchData = async () => {    
            try {
                // Recupera dados do backend
                const { data } = await axios.get(urlRef.current)

                // Verifica se é necessário atualizar
                // Por exemplo: se usuário saiu da página.
                setResult(data)
            }
            catch(e){
                // Exibe erro
                showMessage(e.response.data)
            }
            finally{
                // Loading completo
                setTimeout(()=>setLoading(false),1000)
                
            }
        }
        fetchData()
        return () => {}
    }, [refresh])

    // Retorna referências de memória aos resultados e ao loading
    return [result, loading]
}