const mongoose = require('mongoose')

MONGO_URI = "mongodb+srv://victoria:vick1993@cluster0.ypgk6.mongodb.net/ProjetoCaramelo"

const connect = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('DB conectado!');

    } catch (e) {
        console.log(e)
    }
}

module.exports = { connect }