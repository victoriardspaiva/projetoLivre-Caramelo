const controller = require('../controllers/placesController')
const express = require('express')
const router = express.Router()

const { checkAuth } = require('../middlewares/auth')

//@route GET /home/caramelo
//@desc List all host
//@access Public
router.get('/caramelo', controller.getAll)

//@route GET /home/search
//@desc Host by search 
//@access Public
router.get('/search', controller.getBySearch)
router.get('/teste', controller.getBySearchDois)

//@route POST /home/create
//@desc Create host
//@access Private
router.post('/create', checkAuth, controller.createPlace)

//@route PUT /home/update
//@desc Update host
//@access Private
// router.put('/update', controller.upHosts)
router.put('/up', checkAuth, controller.upHostDois)

//@route DEL /home/delete
//@desc Delete host
//@access Private
router.delete('/delete', checkAuth, controller.deleteHost)


module.exports = router