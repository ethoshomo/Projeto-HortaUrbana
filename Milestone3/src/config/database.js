// Mongoose: conecta-se ao banco de dados MongoDB
const mongoose = require('mongoose')

// DotEnv: segurança de credenciais
require('dotenv').config()

// Credenciais do banco de dados - Observação: o banco de 
// dados somente recebe requisições do ip do website.
const DB_USER =  process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

// Realiza a conexão com o MongoDB
async function connection(callback){
    try{
        
        // Realiza tentativa de conexão
        await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@teste.rdxczdf.mongodb.net/dataset?retryWrites=true&w=majority`,
            { useNewUrlParser: true }
        )

        // Debugger
        console.log('Conectado ao MongoDB.')

        // Libera o listening na porta do processo.
        callback()
    }
    catch(e){
        console.log(e)
    }
}

module.exports = connection