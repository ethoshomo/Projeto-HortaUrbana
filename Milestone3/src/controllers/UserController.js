// Bcrypt: realiza tratamento de codidifcação da senha do usuário
const bcrypt = require('bcrypt')

// JsonWebToken: cria e valida token de login
const jwt = require('jsonwebtoken')

// Usa o modelo dos dados do registro de login
const User = require('../models/userModel')
const Product = require('../models/productModel')

// HTTPStatus: padroniza mensagens de HTTP Status.
const HTTPStatus = require('./HTTPStatus')


const UserController = {
    
    register: async function(req, res) {
        
        // Recuperar dados
        const {name, email, street, district, city, state, tel, password, confirm} = req.body
        
        // Nome existe?
        if(!name) return res.status(422).json({
            success:'',
            error: HTTPStatus.messages(422, 'o nome é obrigatório.')
        })

        // Email existe?
        if (!email) return res.status(422).json({
            success:'',
            error: HTTPStatus.messages(422, 'o email é obrigatório.')
        })

        // Password existe?
        if(!password) return res.status(422).json({
            success:'',
            error: HTTPStatus.messages(422, 'o password é obrigatório.')
        })
        
        // Password foi confirmado corretamente?
        if(password !== confirm) return res.status(422).json({
            success:'',
            error: HTTPStatus.messages(422, 'o password não foi confirmado.')
        })

        // Email previamente cadastrado no banco de dados?
        const repetido = await User.findOne({email: email})

        if(repetido) return res.status(422).json({
            success:'',
            error: HTTPStatus.messages(422, 'email previamente cadastrado.')
        })

        // Tratamento do password: encriptografa a senha para não 
        // termos acesso visual à senha no MongoDB
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        // Criação do objeto User
        const user = {
            name, 
            street,
            district,
            city,
            state,
            tel,
            email, 
            password: passwordHash,
            isAdministrator: false,
            isAdmin: false,
        }

        
        try{
            // Adiciona User no MongoDD
            // Cria registro
            await User.create(user)

            // Retorna status 201 (Created) e o objeto criado
            res.status(201).json({
                success: HTTPStatus.messages(201, 'usuário adicionado com sucesso!'),
                error:'',
                data: user
            })
        } 
        catch(e) {
            // Retorna status 500 = Internal Server Error
            res.status(500).json({
                success:'',
                error: HTTPStatus.messages(500, 'Erro no processamento dos dados. Favor tentar novamente.')
            })
        }
    },


    login: async function(req, res) {

        // Recuperando dados por desestruturação
        const { email, password } = req.body 
        
        // Email existe?
        if (!email) return res.status(422).json({
            success:'',
            error: HTTPStatus.messages(422, 'o email é obrigatório.')
        })

        // Password existe?
        if(!password) return res.status(422).json({
            success:'',
            error: HTTPStatus.messages(422, 'o password é obrigatório.')
        })

        // Usuário existe no sistema?
        const register = await User.findOne({email: email})

        if (!register) return res.status(422).json({
            success:'',
            error: HTTPStatus.messages(404, 'o usuário não foi encontrado.'),
        })
        
        // Verifica a autenticação
        const checkPassword = await bcrypt.compare(password, register.password)

        if (!checkPassword) return res.status(422).json({
            success:'',
            error: HTTPStatus.messages(422, 'senha inválida.'),
        })

        // Resposta ao usuário
        try{
            
            // Valor secreto do site para encriptar o token
            const secret = process.env.SECRET

            // Cria o token para retornar ao usuário
            const token = jwt.sign({id: register._id}, secret)
            
            // Retorna status 200 (Created) e o Token de login
            res.status(200).json({
                success: HTTPStatus.messages(201, 'usuário autenticado com sucesso!'),
                error: '',
                data: {
                    id: register._id,
                    token,
                    name: register.name,
                    street: register.street,
                    district: register.district,
                    city: register.city,
                    state: register.state,
                    tel: register.tel,
                    isAdministrator: register.isAdministrator,
                    isAdmin: register.isAdmin,
                    email: register.email
                }
            })
        } 
        catch(e) {
            // Retorna status 500 = Internal Server Error
            res.status(500).json({
                success: '',
                error: HTTPStatus.messages(500, 'erro interno de processamento')
            })
        }
    },


    check: async function(req, res) {
        
        // Recuperando dados por desestruturação
        const { token } = req.body 

        // Token existe?
        if (!token) return res.status(500).json({
            success: '',
            error: HTTPStatus.messages(500, 'erro no processamento dos dados')
        })

        // Valor secreto do site para encriptar o token
        const secret = process.env.SECRET

        // Cria o token para retornar ao usuário
        const tokenSystem = jwt.decode(token, secret)
        
        // Recuperando dados
        const register = await User.findById(tokenSystem.id)
        
        // Dados foram recuperados?
        if (!register) return res.status(422).json({
            success: '',
            error: HTTPStatus.messages(404, 'o usuário não foi encontrado.'),
        })
        
        // Resposta ao usuário
        try{
            // Valor secreto do site para encriptar o token
            const secret = process.env.SECRET
            // Cria o token para retornar ao usuário
            const token = jwt.sign({id: register._id}, secret)
            
            // Retorna status 200 (Created) e o Token de login
            res.status(200).json({
                success: HTTPStatus.messages(201, 'usuário autenticado com sucesso!'),
                error: '',
                data: {
                    id: register._id,
                    token: token,
                    name: register.name,
                    street: register.street,
                    district: register.district,
                    city: register.city,
                    state: register.state,
                    tel: register.tel,
                    isAdministrator: register.isAdministrator,
                    isAdmin: register.isAdmin,
                    email: register.email
                }
            })
        } 
        catch(e) {
            // Retorna status 500 = Internal Server Error
            res.status(500).json({
                success: '',
                error: HTTPStatus.messages(500, 'erro interno do servidor.')
            })
        }
    },

    edit: async function(req, res){
        // Recuperar dados
        const {
            name, 
            id, 
            street, 
            district, 
            city, 
            state, 
            tel
        } = req.body

        // Criar objeto de atualização
        const update = {
            name, 
            street, 
            district, 
            city, 
            state, 
            tel
        }
        
        // Recuperar registro e realizar o update no banco de dados
        const register = await User.findByIdAndUpdate(id, update)

        // A atualização deu certo?
        if(!register){
            res.status(500).json({
                success: '',
                error: HTTPStatus.messages(500, 'erro na atualização.')
            })
        }

        // Devolve mensagem de sucesso!
        res.status(200).json({
            success: HTTPStatus.messages(200, 'atualização realizada com sucesso'),
            error: '',
            data: register
        })
    },

    getOne: async function(req, res){
        // O valor abaixo pode ser id ou email. Foi escolhido
        // 'id' de identificação e não por causa do identificador.
        const id = req.params.id
        
        // Existem partes do site que buscam por email
        // e outras usam o ID. De modo que precisei fazer
        // as adaptações abaixo.
        let user
        if (id.includes('@')){

            // O retorno da função é dentro de array
            user = await User.find({email: req.params.id})
            user = {
                id: user[0]._id,
                name: user[0].name,
                street: user[0].street,
                district: user[0].district,
                city: user[0].city,
                state: user[0].state,
                tel: user[0].tel,
                email: user[0].email,
                isAdministrator: user[0].isAdministrator,
                isAdmin: user[0].isAdmin
            }
        }
        else{
            // A função não retorna dentro de array
            user = await User.findById(req.params.id)
        }

        // O usuário foi encontrado? Se não, erro 500.
        if(!user){
            res.status(500).json({
                success: '',
                error: HTTPStatus.messages(500, 'erro ao buscar o usuário.')
            })
        }
        
        // Cria objeto de resposta: sem senha.
        const response = {
            id: user._id,
            name: user.name,
            street: user.street,
            district: user.district,
            city: user.city,
            state: user.state,
            tel: user.tel,
            email: user.email,
            isAdministrator: user.isAdministrator,
            isAdmin: user.isAdmin
        }
        
        // Devolve registro com sucesso
        res.status(200).json({
            success: 'usuário recuperado com sucesso!',
            error: '',
            data: response
        })
    },

    getAll: async function(req, res){
        
        try{
            // Recupera todos os usuários
            const users = await User.find()

            // Caso não encontre nenhum, retorna erro
            if(!users){
                res.status(500).json({
                    success: '',
                    error: HTTPStatus.messages(500, 'erro interno do servidor.')
                })
            }
            
            // Caso contrário, sucesso.
            res.status(200).json({
                success: 'usuários recuperados com sucesso!',
                error: '',
                data: users
            })
        }
        catch(e){
            // Mensagem de erro de servidor
            res.status(500).json({
                success: '',
                error: HTTPStatus.messages(500, 'erro interno do servidor.')
            })
        }
        
    },

    delete: async function (req, res){
        const id = req.params.id
        
        try{
            // Procura o usuário e o deleta
            const response = await User.findByIdAndDelete(id)
            
            // Caso não seja encontrado, retorna erro.
            if(!response){
                res.status(500).json({
                    success: '',
                    error: HTTPStatus.messages(500, 'erro interno do servidor.')
                })
            }

            // Por precaução, verifica se existem produtos cadastrados no
            // nome do usuário. Caso tenha, deleta todos eles.
            const products = await Product.find({producer: response._id})
            
            if (products.length > 0){
                for(let p of products){
                    const deleted = await Product.findByIdAndDelete(p._id)
                }
            }
            
            // Retorna Sucesso
            res.status(200).json({
                success: HTTPStatus.messages(200,'usuário deletado com sucesso!'),
                error: ''
            })
        }
        catch(e){

            // Mensagem de erro de servidor
            res.status(500).json({
                success: '',
                error: HTTPStatus.messages(500, 'erro interno do servidor.')
            })
        }
        
    },

    changeAdministrator: async function(req, res){
        
        // Recupera os dados do front-end
        const {
            id,
            administrator 
        } = req.body

        // Monta update dos dados
        const update = {
            isAdministrator: administrator
        }

        // Realiza o update com base no id e dados
        const register = await User.findByIdAndUpdate(id, update)

        // A atualização deu certo?
        if(!register){
            res.status(500).json({
                success: '',
                error: HTTPStatus.messages(500, 'erro na alteração.')
            })
        }

        // Devolve mensagem de sucesso!
        res.status(200).json({
            success: HTTPStatus.messages(200,'atualização realizada com sucesso!'),
            error: '',
        })
    }
}

module.exports = UserController