const mongoose = require('mongoose')

const placesSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    about:{
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
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
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    animal: {
        type: String,
        required: true        
    }
}, { timestamps: true })

module.exports = mongoose.model('Place', placesSchema)