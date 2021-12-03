const app = require('./src/app')
// const dotenv = require('dotenv-safe')

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})