// Router: reune as rotas
const router = require('express').Router()

// Controller: regras de negócio da rota.
const SalesController = require('../controllers/SalesController')

// Rotas
router.post('/', SalesController.register)

module.exports = router