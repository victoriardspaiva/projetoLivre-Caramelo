const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv-safe')

const routerPlaces = require('./routes/placesRouter')
const routerUser = require('./routes/userRouter')
const index = require('./index')

const database = require('./database/configMongo')

const app = express()
app.use(cors())
app.use(express.json())

/* rotas */
app.use('/home', routerPlaces)
app.use('/user', routerUser)
app.use('/', index)

dotenv.config()
database.connect()

module.exports = app