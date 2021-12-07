const controller = require('../controllers/placesController')
const express = require('express')
const router = express.Router()

//@route GET /home/caramelo
//@desc List all host
//@access Public
router.get('/caramelo', controller.getAll)

//@route GET /home/search
//@desc Host by search 
//@access Public
router.post('/search', controller.getBySearch)

//@route POST /home/create
//@desc Create host
//@access Public
router.post('/create', controller.createPlace)

module.exports = router