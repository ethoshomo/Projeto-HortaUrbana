import React from 'react'
import { Link } from 'react-router-dom'
import BtnSubmit from '../Form/BtnSubmit'

function CardEditor({ id, onDelete }) {
    
    return (
        <footer className="card-footer-editor">
            <hr />
            <Link
                to={`/editar/${id}`}
                className="btn btn-sm btn-outline-warning card-btn">
                Editar
            </Link>

            <BtnSubmit
                classes="btn btn-sm btn-outline-danger card-btn"
                id="submitFormLogin"
                handleSubmit={onDelete}>
                Deletar
            </BtnSubmit>
        </footer>
    )
}
export default CardEditor