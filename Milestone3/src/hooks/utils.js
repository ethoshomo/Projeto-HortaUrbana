import { toast } from 'react-toastify'

// Exibe mensagem na tela
export function showMessage(response, message){

    // Verifica se é para exibir mensagem
    if (message){

        // Exibe sucesso
        if (response.success){
            toast.success(response.success.split(':')[1], {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }

        // Exibe erro
        if(response.error){
            toast.error(response.error.split(':')[1], {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
    }
}

//Checa se os dados estão presentes
export function assert(variable, error){
    if (!variable){
        showMessage({
            success: '',
            error: error}, true)
            return true
    }
    return false
}

// Exibe o total de preço e de produto no carrinho
export function totalPriceProduct(cartList){    
    let totalPrice = 0
    let totalProduct = 0

    for (let product of cartList){
        totalPrice += product.totalProduct * product.price
        totalProduct += product.totalProduct
    }

    if (totalPrice !== 0) totalPrice += 5 // Frete
    
    const totalPriceSpan = document.getElementById('totalPrice')
    const totalProductSpan = document.getElementById('totalProduct')
    
    if (totalPriceSpan) totalPriceSpan.innerText = String(totalPrice.toFixed(2))
    if (totalProductSpan) totalProductSpan.innerText = String(totalProduct)
}

// Exibe o endereço do usuário de forma estruturada
export function handleAddress(street, district, city, state) {
    return `${street ? street+', ' : ''}${district ? district+' - ' : ''}${city ? city+' ' : ''}${state ? '('+state+') ' : ''}`
}

// Cuida de checar limites de quantidades de produtos
export function checkNumber(e, fn, maxQuantity){
    const value = Number(e.target.value)

    if (value >= maxQuantity){
        fn(Number(maxQuantity))
    }
    else if (value <= 0){
        fn(1)
    }
    else{
        fn(value)
    }       
}