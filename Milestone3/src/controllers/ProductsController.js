// Register: usa o modelo dos dados do registro de login
const ProductModel = require('../models/productModel')

// Pacote de Path
const path = require('path')

// Pacote de arquivos
const fs = require('fs')

// HTTPStatus: padroniza mensagens de HTTP Status.
const HTTPStatus = require('./HTTPStatus')


const ProductsController = {

    register: async function(req, res) {
        // Recupera informações por desestruturação
        const img = {
            name: req.file.filename,
            type: req.file.mimetype,
            path: req.file.path
        }
        
        // Recupera informações por desestruturação
        const { 
            id, 
            description, 
            price, 
            stock, 
            producer
        } = JSON.parse(req.body.data)

                
        // O id foi preenchido?
        if (id == 'DEFAULT') return res.status(422).json({
            success: '',
            error: HTTPStatus.messages(422, 'é obrigatório preencher o produto.')
        })
        
        // A descriação foi preenchida?
        if (!description)return res.status(422).json({
            success: '',
            error: HTTPStatus.messages(422, 'é obrigatório descrever o produto.')
        })
        
        // O nome da imagem foi preenchido?
        if(!img.name) return res.status(422).json({
            success: '',
            error: HTTPStatus.messages(422, 'é obrigatório informar uma imagem.')
        })
        
        // O tipo da imagem foi preenchido?
        if(!img.type) return res.status(422).json({
            success: '',
            error: HTTPStatus.messages(422, 'é obrigatório informar uma imagem.')
        })
        
        // O path da imagem foi preenchido?
        if(!img.path) return res.status(422).json({
            success: '',
            error: HTTPStatus.messages(422, 'é obrigatório informar uma imagem.')
        })
        
        // O arquivo é imagem?
        let check = ''
        if (req.file) check = req.file.mimetype.split('/')[0]
        if (check && check !== 'image') {

            fs.unlinkSync('./public/images/' + req.file.filename)
            
            res.status(500).json({
                success: '',
                error: HTTPStatus.messages(500, 'o arquivo precisa ser uma imagem.')
            })
            return
        }

        // O preço foi preenchido?
        if (!price) return res.status(422).json({
            success: '',
            error: HTTPStatus.messages(422, 'é obrigatório informar o id da imagem.')
        })
        
        // A quantidade foi preenchida?
        if (!stock) return res.status(422).json({
            success: '',
            error: HTTPStatus.messages(422, 'é obrigatório informar a quantidade.')
        })
        
        // O administrador está logado?
        if (!producer) return res.status(500).json({
            success: '',
            error: HTTPStatus.messages(500, 'o usuario precisa estar logado para cadastrar produtos.')
        })
               
        // Constrói objeto para adicionar ao banco de dados
        const product = {
            id,
            description,
            price: price.replace(',','.'),
            stock,
            producer,
            imgName: img.name
        }
        
        // Adiciona Produto no MongoDB
        try{
            // Cria registro no MongoDB
            await ProductModel.create(product)
        
            // Retorna status 201 (Created) e o objeto criado
            res.status(201).json({
                error: '',
                success: HTTPStatus.messages(201, 'produto adicionado com sucesso!'),
                data: product
            })
        } 
        catch(e) {
            // Retorna status 500 = Internal Server Error
            res.status(500).json({
                success: '',
                error: HTTPStatus.messages(500, 'erro de processamento no servidor.')
            })
        }
    },

    getOne: async function (req, res){
        const id = req.params.id
        try{
            // Recupera um único produto pelo id
            const product = await ProductModel.findById(id)
            
            // Devolve o resultado com mensagem de sucesso
            res.status(200).json({
                data: product,
                success: HTTPStatus.messages(200, 'produto encontrado!'),
                error: ''
            })
        }
        catch(e){
            // Retorna status 500 = Internal Server Error
            res.status(500).json({
                success: '',
                error: HTTPStatus.messages(500, 'erro de processamento no servidor.')
            })
        }
        
    },

    getAll: async function (req, res){
        
        try{
            // Recupera todos os produtos do banco de dados
            const products = await ProductModel.find()

            // Retorna todos os produtos com mensagem de sucesso
            res.status(200).json({
                data: products,
                success: HTTPStatus.messages(200, 'produtos encontrados com sucesso!'),
                error: ''
            })
        }
        catch(e){
            // Retorna status 500 = Internal Server Error
            res.status(500).json({
                success: '',
                error: HTTPStatus.messages(500, 'erro de processamento no servidor.')
            })
        }
        
    },

    delete: async function (req, res){
        
        // Recupera o id do produto que será deletado
        const id = req.params.id

        try{
            // Busca e deleta o produto de id indicado
            const resposta = await ProductModel.findByIdAndDelete(id)
        
            // Caso a resposta seja vazia, mensagem de erro
            if (!resposta) return res.status(500).json({
                success: '',
                error: HTTPStatus.messages(500, 'ocorreu um erro ao deletar o produto.')
            })
    
            // Apaga a imagem do produto do servidor
            fs.unlinkSync('./public/images/'+resposta.imgName)
            
            // Retorna mensagem de sucesso
            res.status(200).json({
                error: '',
                success: HTTPStatus.messages(200,'produto deletado com sucesso!')
            })
        }
        catch(e){
            // Retorna status 500 = Internal Server Error
            res.status(500).json({
                success: '',
                error: HTTPStatus.messages(500, 'erro de processamento no servidor.')
            })
        }
        
    },

    update: async function(req, res){
        
        // Recebe todos os dados para atualizar
        const { 
            _id,
            id, 
            description, 
            price, 
            stock, 
            oldImg
        } = JSON.parse(req.body.data)     

        // É imagem?
        let check = ''
        if (req.file) check = req.file.mimetype.split('/')[0]
        if (check && check !== 'image') {

            fs.unlinkSync('./public/images/' + req.file.filename)
            
            res.status(500).json({
                success: '',
                error: HTTPStatus.messages(500, 'o arquivo precisa ser uma imagem.')
            })
            return
        }

        // Preco é valido?
        const re = /\b[0-9]+\b/gm
        if(!re.exec(price.replace('.','').replace(',',''))){

            if(req.file) fs.unlinkSync('./public/images/' + req.file.filename)
            
            res.status(500).json({
                success: '',
                error: HTTPStatus.messages(500, 'o preço contém caracteres inválidos.')
            })
            return
        }
        
        // Caso seja, cria objeto de update
        update = {
            id,
            description,
            price: price.replace(',','.'),
            stock,
            imgName: req.file ? req.file.filename : oldImg
        }

        
        try{
            // Realiza o update
            const product = await ProductModel.findByIdAndUpdate(_id, update)

            // Verifica se aconteceu algum erro
            if (!product){
                res.status(500).json({
                    success: '',
                    error: HTTPStatus.messages(500, 'erro na atualização do produto.')
                })
                return
            }

            // Caso tenha arquivo novo, apaga o antigo
            if (req.file) fs.unlinkSync('./public/images/' + oldImg)

            // Retorna mensagem de sucesso
            res.status(200).json({
                data: {...product},
                error: '',
                success: HTTPStatus.messages(200,'produto atualizado com sucesso!')
            })
        }
        catch(e){
            // Retorna erro do servidor no processamento de dados
            res.status(500).json({
                success: '',
                error: HTTPStatus.messages(500, 'erro na atualização do produto.')
            })
        }
    }

}

module.exports = ProductsController