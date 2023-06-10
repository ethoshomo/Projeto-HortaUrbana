import React from 'react'
//import Loader from './Products'

function Sold() {
    return (
        <section id="paginaSold" className="boxContent">           
            <article className="content text-center">
                <h1>SOLD</h1>
                <p>Aguarde enquanto processamos seu pedido:</p> 
            </article>
        </section>
    )
}

export default Sold

/**
 <Loader message={true} component={(<div>Venda realizada com sucesso!!</div>)}/>
 */