const controller = require('../controllers/placesController')
const express = require('express')
const router = express.Router()

// router.get('caramelo', )

//@route GET /api/users/
//@desc Listar todos os cadastros
//@access Public
router.get('/caramelo', controller.getAll)

module.exports = router