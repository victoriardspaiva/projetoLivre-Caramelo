const express = require('express')
const cors = require('cors')
const router = require('./routes/placesRouter')

const database = require('./database/configMongo')

const app = express()
app.use(cors())
app.use(express.json())

/* rotas */
app.use('/home', router)

database.connect()

module.exports = app