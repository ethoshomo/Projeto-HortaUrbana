// Router: reune as rotas
const router = require('express').Router()
const cors = require('cors')

// Controller: regras de negócio da rota.
const UserController = require('../controllers/UserController')

// Rotas
router.post('/', UserController.check)
router.post('/administrator', UserController.changeAdministrator)
router.post('/login', cors(), UserController.login)
router.post('/cadastro', UserController.register)
router.put("/edit", UserController.edit)
router.get("/:id", UserController.getOne)
router.get("/", UserController.getAll)
router.delete('/:id', UserController.delete)

module.exports = router