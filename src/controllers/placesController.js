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
    const { id, nome, host, district, animal } = req.query
    let search = Places

    try {
        if (id) {
            search = await Places.findById(req.query.id)
            res.status(200).json(search)
        }
        nome != undefined ? search = await Places.find(req.query.nome) : res.status(500).send("Host not found")
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
