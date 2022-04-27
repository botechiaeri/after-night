
const productsController = require('./../controllers/productsController.js')
const express = require('express')
const router = express.Router()
router.get('/', productsController.listDestaques)
router.get('/comuna-:comunaID', productsController.comunasP)
router.get('/CABA', productsController.listCABA)
// router.get('/local-:idLocal/:idRooms', productsController.detallesR)
// router.get('/CABA', productsController.listCABA)
module.exports = router


