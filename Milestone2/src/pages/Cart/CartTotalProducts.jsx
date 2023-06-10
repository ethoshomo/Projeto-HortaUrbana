import React, { useEffect } from 'react'

function CartTotalProduct() {
    
    // Atualiza a palavra 'produto' para 'produtos'
    useEffect(function showWord(){
        
        const value = Number(document.getElementById('totalProduct').innerText)
        
        let string
        if (Number(value) === 1 || Number(value) === 0)
            string = ' produto' 
        else 
            string = ' produtos'
        
        document.getElementById('word').innerHTML = string
    })
    
    return (
        <>
            <h5 className='board-title'>Produtos</h5>
            <p className='board-text text-center'>
                <span id="totalProduct">0</span>
                <span id="word"></span>
            </p>
            <hr />
        </>
    )
}

export default CartTotalProduct