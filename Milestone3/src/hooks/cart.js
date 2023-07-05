// Importação dos módulos necessários para o contexto
import { createContext, useContext, useReducer } from 'react'

const initialValue = []

// Criação do Contexto de Carrinho
const cartContext = createContext(initialValue)

export function reducer(state, action) {
    switch (action.type) {

        case 'addCart':
            // Verifica se o produto está na lista
            for (let product of state) {
                if (product._id === action.product._id) {
                    return state
                }
            }
            // Criar produto e adicionar valor padrão 1
            const product = action.product
            product.totalProduct = 1

            return [product, ...state]

        case 'removeItem':
            const newList = []
            for (let product of state){
                if (product._id !== action.id){
                    newList.push(product)
                }
            }
            return newList
        
        case 'updateItem':
            for (let product of state){
                if (product._id === action.id){
                    product.totalProduct = action.value
                }
            }
            return state
        
        case 'emptyCart':
            return initialValue
            
        default:
            throw new Error()
    }
}

// Criação do Provedor de Contexto de Carrinho
export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(reducer, initialValue)
    return <cartContext.Provider value={[cart, dispatch]}>{children}</cartContext.Provider>
}

// Criação do Consumidor de Contexto de Carrinho
export default function CartConsumer() {
    return useContext(cartContext)
}