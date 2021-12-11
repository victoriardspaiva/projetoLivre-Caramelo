const controller = require('../controllers/userController')
const express = require('express')
const routerUser = express.Router()

//@route POST /api/users/register
//@desc Criar conta
//@access Public
routerUser.post('/register', controller.register)

module.exports = routerUser

