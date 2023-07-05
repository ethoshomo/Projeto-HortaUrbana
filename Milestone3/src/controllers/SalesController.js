// Login: usa o modelo dos dados do registro de login
const Sales = require('../models/salesModel')
const Product = require('../models/productModel')
const User = require('../models/userModel')

// HTTPStatus: padroniza mensagens de HTTP Status.
const HTTPStatus = require('./HTTPStatus')

const nodemailer = require('nodemailer')


// Função responsável por mandar emails no backend
function sendEmail(recipient, message){

    // Coleta informações do email para configurar envio.
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.NODEMAILER_EMAIL,
          pass: process.env.NODEMAILER_PASSWORD,
        }
    });
    
    // Configura dados de envio do email
    const mailOptions = {
        from: 'projetoHortaurbana@gmail.com',
        to: recipient,
        subject: '_HortaUrbana: pedido concluído com sucesso!', 
        html: message
    };
    
    // Imprime no console do backend o resultado da operação
    transporter.sendMail(mailOptions, (err, info) => {
        if(err)
          console.log(err)
        else
          console.log(info);
    });
}


const SalesController = {
    
    register: async function(req, res) {

        // Recupera informações para armazenar no Banco de Dados
        const { 
            buyerId,
            buyerEmail,
            buyerNome,
            totalPrice,
            totalProduct,
            paymentMethod,
            cardNumber,
            deliveryAddress,
            cart
        } = req.body

        // Cria objeto de histórico
        const history = { 
            buyerId,
            totalPrice,
            totalProduct,
            paymentMethod,
            cardNumber,
            deliveryAddress,
            cart
        }

        // Armazena o objeto no banco de dados.
        const created = await Sales.create(history)

        // Variável que armazena a lista de vendas
        let listProducts = '<ul>'

        // Alimenta a lista de vendas e atualiza banco de dados
        for (let product of cart){
            // lista de vendas
            listProducts += `<li>${product.id}: ${product.totalProduct} unidade(s).</li>`
            
            // Consulta quantidade em estoque
            const productStock = await Product.findById(product._id)
            const stockQuantity = Number(productStock.stock)
            
            // Coleta quantidade de produtos vendidos
            const quantitySold = Number(product.totalProduct)
            
            //Contabiliza novo valor do banco de dados
            const final = stockQuantity - quantitySold

            // Caso o valor seja menor que zero, houve algum erro
            // e a venda é abortada.
            if(final < 0) return res.status(500).json({
                success: '',
                error: HTTPStatus.messages(500, 'Não há produtos suficientes para atender o pedido.')
            })

            // Caso o valor final seja igual a zero, precisa deletar
            // o produto do estoque.
            if (final === 0){
                const deleted = await Product.findByIdAndDelete(product._id)
            }
            // Caso contrário, apenas realiza o update.
            else{
                const update = await Product.findByIdAndUpdate(product._id, {stock: final})
            }
        }
        // Finaliza a lista de produtos
        listProducts += '</ul>'
        
        // Prepara mensagem de email
        const emailMessage = `<h2>Olá, ${buyerNome}!<h2>\n` +
            `<p>Você comprou: ${listProducts} </p>` +
            `<p>Informamos que seu pedido foi concluído com sucesso e` +
            ` será entregue em ${deliveryAddress}.</p>` +
            `<p>A equipe _HortaUrbana agradece a preferência!</p>` +
            `<p>Obrigado!</p>`

        // Envia email ao comprador.
        sendEmail(buyerEmail, emailMessage)

        // Responde ao Frontend
        res.status(200).json({
            success: HTTPStatus.messages(200,'compra realizada com sucesso!'),
            error: ''
        })

    }
}

module.exports = SalesController