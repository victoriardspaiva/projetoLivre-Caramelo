const Places = require('../models/placesSchema')
const mongoose = require('mongoose')

const getAll = async (req, res) => {
    try {
        const places = await Places.find()
        res.status(200).json({ message: 'Lista de ONG\'s e abrigos:', places })

    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

const createPlace = async (req, res) => {
    const { name, about, district, email, contact, pix, host, quantity, animal } = req.body
    try {
        const newPlace = new Places({
            name,
            about,
            district,
            email,
            contact,
            pix,
            host,
            quantity,
            animal,
            _id: new mongoose.Types.ObjectId()
        })

        const savePlace = await newPlace.save()
        res.status(201).json({
            message: "Successfully created host.",
            savePlace
        })

    } catch (e) {
        res.status(400).json({
            message: e.message
        })
    }

}

const getBySearch = async (req, res) => {
    const { id, name, host, district, animal } = req.query
    let search = Places

    try {
        if (id) search = await search.findById(id) 
        if (name) search = await search.find({ name: { $regex: name } })
        if (district) search = await search.find({ district: { $regex: district } })
        if (animal) search = await search.find({ animal: { $regex: animal } })
        if (host) search = await search.find({ host : host })            
        
        res.status(200).json(search)

    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

module.exports = {
    getAll,
    getBySearch,
    createPlace
}
