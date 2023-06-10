import React from 'react'
import { Link } from 'react-router-dom'

function FooterAboutUs() {
    return (
        <div className="p-2 bd-highlight footer-box">
            <h4>Sobre Nós</h4>
            <p><Link to="/">Quem Somos</Link></p>
            <p><Link to="/">Produtos</Link></p>
            <p><Link to="/">Send</Link></p>
        </div>
    )
}

export default FooterAboutUs