const controller = require('../controllers/placesController')
const express = require('express')
const router = express.Router()

const { checkAuth } = require('../middlewares/auth')

//@route GET /home/all
//@desc List all host
//@access Public
router.get('/all', controller.getAll)

//@route GET /home/search
//@desc Host by search 
//@access Public
router.get('/search', controller.getBySearch)

//@route POST /home/create
//@desc Create host
//@access Private
router.post('/create', checkAuth, controller.createPlace)

//@route PUT /home/update
//@desc Update host
//@access Private
// router.put('/update', controller.upHosts)
router.put('/up', checkAuth, controller.upHost)

//@route DEL /home/delete
//@desc Delete host
//@access Private
router.delete('/delete', checkAuth, controller.deleteHost)


module.exports = router

//jfskldfjsklfshklfhsfkashdfkjshdf