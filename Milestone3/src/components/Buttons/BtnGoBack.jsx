import React from 'react'
import { useNavigate } from 'react-router'

function BtnGoBack({id}) {
    
    // Hook de navegação
    const navigate = useNavigate()
    
    // Ação do botão de voltar
    function handleGoBack(e){
        e.preventDefault()
        navigate(-1)
    }

    // Identifica o botão em cada uma das páginas de forma distinta
    const identification = 'btnGoBack-'+id

    return (
        <button 
            id={identification}
            className="submit" 
            onClick={(e) => handleGoBack(e)}>Voltar
        </button>        
    )
}

export default BtnGoBack