import React from 'react'
import { Link } from 'react-router-dom'

function FooterPolitics() {
    return (
        <div className="p-2 bd-highlight footer-box">
            <h4>Políticas</h4>
            <p><Link to="/">Política de Atendimento ao Consumidor</Link></p>
            <p><Link to="/">Política de Trocas e Devoluções</Link></p>
        </div>
    )
}
export default FooterPolitics