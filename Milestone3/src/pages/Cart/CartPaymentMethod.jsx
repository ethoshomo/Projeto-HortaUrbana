import React from 'react'
import Input from '../../components/Form/FormInput'

function CartPaymentMethod({ cardNumber, setCardNumber }) {
    
    // Embora feio, o código abaixo será mantido para evitar 
    // a complexidade da componentização do RadioButton 
    // (considera-se a recuperação da informação no carrinho).
    return (
        <>
            <h5 className='board-title'>Forma de Pagamento</h5>
            <div>
                
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="paymentMethod" id="debitCard" value="Débito" defaultChecked />
                    <label className="form-check-label" htmlFor="debitCard">
                        Cartão de Débito
                    </label>
                </div>
                
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="paymentMethod" id="creditCard" value="Crédito" />
                    <label className="form-check-label" htmlFor="creditCard">
                        Cartão de Crédito
                    </label>
                </div>

                <Input
                    id='inputNumeroCartao'
                    type='text'
                    value={cardNumber}
                    name='numeroCartao'
                    placeholder='Número do Cartão'
                    onChange={setCardNumber}>
                    Número*
                </Input>

                <span className="notation">*Apenas números</span>
            </div>
            <hr />
        </>
    )
}

export default CartPaymentMethod