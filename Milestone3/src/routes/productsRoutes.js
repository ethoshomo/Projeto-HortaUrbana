// Router: reune as rotas
const router = require('express').Router()

// Constroi o dado para ser usado na rota. 
// O parâmetro de single é o nome do atributo 'name' do input.
const upload = require('../config/multer')

// Controller: regras de negócio da rota.
const ProdutosController = require('../controllers/ProductsController')

// Rotas
router.get('/', ProdutosController.getAll)
router.get('/:id', ProdutosController.getOne)
router.post('/', upload.single('image'), ProdutosController.register)
router.delete('/:id', ProdutosController.delete)
router.put('/', upload.single('image'), ProdutosController.update)

module.exports = router