const express = require('express')
const app = express()
const port = 3001

//  MIDDLEWARES --------------------------------------------
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false})) //Era true
app.use(bodyParser.json())
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'public')))


//  ROTAS DE ENDPOINT --------------------------------------

// Cuida das rotas de usuários
const userRoutes = require('./src/routes/userRoutes')
app.use('/usuario', userRoutes)

// Cuida das rotas de produtos
const productsRoutes = require('./src/routes/productsRoutes')
app.use('/produtos', productsRoutes)

// Cuida das rotas das vendas
const salesRoutes = require('./src/routes/salesRoutes')
app.use('/sales', salesRoutes)

// CONEXÃO COM O BANCO DE DADOS ---------------------------
const mongoDB = require('./src/config/database')
mongoDB(listening)


// DISPONIBILIDADE DO APP EM PORTA DE COMUNICAÇÃO  --------
function listening(){
    app.listen(port, () => {
        console.log('Servidor online!')
    })
}