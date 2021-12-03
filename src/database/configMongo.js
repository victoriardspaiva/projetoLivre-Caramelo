const mongoose = require('mongoose')

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('DB conectado!');

    } catch (e) {
        console.log(e)
    }
}

module.exports = { connect }