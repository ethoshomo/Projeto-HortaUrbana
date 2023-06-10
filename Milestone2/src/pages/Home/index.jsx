import React from 'react'
import Carousel from '../../components/Carousel'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <section id="paginaHome" className="boxContent">
            
            <Carousel />    
            
            <article className="content text-center">
                <h1>Seja <Link to='/'>bem vindo</Link> a _HortaUrbana!</h1>
                <p>Para ver a lista de ofertas, faça o <Link to='/auth'>login</Link> no site!</p>
            </article>
        
        </section>
    )
}

export default Home