const controller = require('../controllers/userController')
const express = require('express')
const routerUser = express.Router()
const { checkAuth } = require('../middlewares/auth')

//@route POST /user/register
//@desc Create an account
//@access Public
routerUser.post('/register', controller.register)

//@route GET /user/all
//@desc List account
//@access Public
routerUser.get('/all', controller.getAll)

//@route POST /user/login
//@desc Access account
//@access Public
routerUser.post('/login', controller.login)

//@route GET /user/id
//@desc List all users
//@access Public
routerUser.get('/id', controller.getUser)

//@route PUT /user/update
//@desc Update users
//@access Public
routerUser.put('/update', controller.upUsers)

//@route DELETE /user/delete
//@desc Delete users
//@access Public
routerUser.delete('/delete', controller.deleteUser)

module.exports = routerUser

