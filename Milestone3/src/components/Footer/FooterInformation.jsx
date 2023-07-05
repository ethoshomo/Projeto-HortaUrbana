import React from 'react'

function FooterInformation() {

    return (
        <div className="p-2 bd-highlight footer-box">
            <h4>Informações</h4>
            <p>
                <i className="bi bi-whatsapp"></i> Whatsapp:<br />
                (16)9999-8888
            </p>

            <p>
                <i className="bi bi-envelope"></i> Email:<br />
                <a href="mailto:projetohortaurbana@gmail.com?subject=Contato&body=Contato">Mande-nos uma mensagem!</a>
            </p>
        </div>
    )
}
export default FooterInformation