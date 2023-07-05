import React from 'react'
import { useRouteError } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

function Error(){
    const error = useRouteError()
    console.error(error)

    return (
        <>
            <Header />
            <section id="paginaErro" className="boxContent">
                <h1>Default: {error.statusText || error.message}</h1>
                <a className='text-center' href="/">GO BACK</a>
            </section> 
            <Footer />
        </>
    )
}

export default Error