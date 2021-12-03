const mongoose = require('mongoose')

const placesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    about:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    pix: {
        type: String,
        required: true,
    },
    adoption: {
        type: Boolean,
        required: true
    },
    host: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Place', placesSchema)