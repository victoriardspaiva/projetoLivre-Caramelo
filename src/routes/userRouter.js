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
//@access Private
routerUser.get('/id', checkAuth, controller.getUser)

module.exports = routerUser

