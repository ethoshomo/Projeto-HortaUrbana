import React from 'react'
import { useNavigate } from 'react-router'

function BtnGoBack({id}) {

    const navigate = useNavigate()
    
    function handleGoBack(e){
        e.preventDefault()
        navigate(-1)
    }

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


