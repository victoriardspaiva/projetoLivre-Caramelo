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
    host: {
        type: Boolean,
        quantity: Number,
        required: true
    },
    type: {
        
    }
}, { timestamps: true })

module.exports = mongoose.model('Place', placesSchema)