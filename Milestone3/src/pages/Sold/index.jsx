import React from 'react'

function Sold() {
    return (
        <section id="pageSold">
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col'></div>
                    <div className='col-2 text-end'>
                        <i id='icon-sold' className="bi bi-check-circle-fill text-sucess"></i>
                    </div>
                    <div className='col-8'>
                        <h2>PEDIDO REALIZADO COM SUCESSO</h2>
                    </div>
                    <div className='col'></div>

                </div>
            </div>

            <div className="border rounded-3 boardSold">
                <h3 className='text-center'>Parabéns! </h3>
                <p>Sua compra foi processada corretamente!</p>
                <p>Agora você receberá os dados de seu pedido por email.
                    Confira as informações e, caso haja algum problema,
                    pedimos que entre em contato imediatamente!</p>
            </div>




        </section>
    )
}

export default Sold