const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv-safe')

const router = require('./routes/placesRouter')
const routerUser = require('./routes/userRouter')
const index = require('./index')

const database = require('./database/configMongo')

dotenv.config()
database.connect()

const app = express()
app.use(cors())
app.use(express.json())

/* rotas */
app.use('/home', router)
app.use('/user', routerUser)
app.use('/', index)

module.exports = app