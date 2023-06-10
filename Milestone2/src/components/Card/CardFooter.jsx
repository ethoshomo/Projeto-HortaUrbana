import React from 'react'
import { Link } from 'react-router-dom'

function CardFooter({ id, info, onClick}) {

    return (
        <footer className="card-footer-principal">
        
            <Link 
                to={`/produtos/${id}`} 
                className="btn btn-outline-success card-btn">
                Detalhes
            </Link>
            
            <button 
                onClick={(e) => onClick(e, info)} 
                className="btn btn-primary card-btn">
                Comprar
            </button>

        </footer>
    )
}
export default CardFooter