// Importação dos módulos necessários para o contexto
import { createContext, useContext, useReducer } from 'react'

// Criação das chaves e valores iniciais
const initialState = {
    auth: false,
    id: '',
    token: '',
    name: '',
    street: '',
    district: '',
    city: '',
    state: '',
    tel: '',
    isAdministrator: false,
    isAdmin: false,
    email: ''
}

// Criação do Contexto de Autenticação
const authContext = createContext(initialState)

export function reducer(state, action){
    
    switch(action.type){

        // Realiza o login no site
        case 'login':
            
            localStorage.setItem('token', action.token)
        
            return {
                auth: true,
                id: action.id,
                token: action.token,
                name: action.name,
                street: action.street,
                district: action.district,
                city: action.city,
                state: action.state,
                tel: action.tel,
                isAdministrator: action.isAdministrator,
                isAdmin: action.isAdmin,
                email: action.email,
            }
        
        // Usado quando o usuário clica em logout no menu
        // dropdown.
        case 'logout':
            localStorage.removeItem('token')
            return initialState
        
        // Usado quando o usuário faz update dos dados
        // do profile
        case 'loginUpdate':

            return {
                auth: true,
                id: action.id,
                token: state.token,
                name: action.name,
                street: action.street,
                district: action.district,
                city: action.city,
                state: action.state,
                tel: action.tel,
                isAdministrator: action.isAdministrator,
                isAdmin: action.isAdmin,
                email: action.email
            }
        
        default:
            throw new Error()
    }
}

// Criação do Provedor de Contexto de Autenticação
export function AuthProvider({ children }){
    const [authed, dispatch] = useReducer(reducer, initialState)
    return <authContext.Provider value={[authed, dispatch]}>{children}</authContext.Provider>
}

// Criação do Consumidor de Contexto de Autenticação
export default function AuthConsumer(){
    return useContext(authContext)
}