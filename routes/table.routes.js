const Router = require('express')
const router = new Router()
const tableController = require('../controllers/table.controller')

router.get('/get', tableController.getTable)
router.get('/getByName', tableController.getByName)
router.get('/sort', tableController.Sort)

module.exports = router