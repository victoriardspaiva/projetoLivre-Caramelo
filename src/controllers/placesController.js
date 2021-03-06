const Places = require('../models/placesSchema')
const mongoose = require('mongoose')

const getAll = async (req, res) => {
    try {
        const places = await Places.find()
        res.status(200).json({ message: 'Host list:', places })

    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

const createPlace = async (req, res) => {
    let { name, about, district, email, contact, pix, host, quantity, animal } = req.body

    animal = animal.toLowerCase()
    if (animal != 'cat' && animal != 'dog' && animal != 'both') {
        return res.status(400).json({ message: "Choose from one of the valid options: cat or dog." })
    } //tratamento para não aceitar qq coisa que seja != de cat, dog ou ambos

    try {
        const newPlace = new Places({
            name,
            about,
            district,
            email,
            contact,
            pix,
            host, //adoção ou patrocinador
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
    let found = {}

    try {
        if (id) {
            search = await search.findById(id)
            if (search == null) return res.status(422).json({ "message": "Host does not exist." })
            return res.status(200).json(search)

        }

        if (name) found.name = { $regex: name }
        if (animal) found.animal = { $regex: animal }
        if (district) found.district = { $regex: district }
        if (host) found.host = host

        search = await search.find(found)
        if (id == '' || name == '' || host == '' || district == '' || animal == '') return res.status(422).json({ "message": "The search field must not be empty. Set search or search for all records." })
        if (search == '') return res.status(422).json({ "message": "No results were found. Reset your search and try again." })
        res.status(200).json(search)

    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

const upHost = async (req, res) => {
    try {
        const id = req.query.id
        let findHost = await Places.findById(id)

        if (findHost) {
            findHost.name = req.body.name || findHost.name
            findHost.about = req.body.about || findHost.about
            findHost.district = req.body.district || findHost.district
            findHost.email = req.body.email || findHost.email
            findHost.contact = req.body.contact || findHost.contact
            findHost.pix = req.body.pix || findHost.pix
            findHost.host = req.body.host || findHost.host
            findHost.quantity = req.body.quantity || findHost.quantity
            findHost.animal = req.body.animal || findHost.animal
        }

        const savedHost = await findHost.save()
        res.status(200).json({
            message: "Host updated successfully", "New host": savedHost
        })

    } catch (e) {
        res.status(500).json({
            message: e.message
        })

    }
}

const deleteHost = async (req, res) => {
    try {
        let id = await Places.findById(req.query.id)
        if (id == null) return res.status(422).json({ "message": "Host does not exist." })
        const deletePlace = await Places.findByIdAndDelete({ _id: req.query.id })
        res.status(200).json({
            message: "Host deleted sucessfully", deletePlace
        })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

module.exports = {
    getAll,
    getBySearch,
    createPlace,
    upHost,
    deleteHost
}
