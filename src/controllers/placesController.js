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
        if (host) search = await search.find({ host: host })

        res.status(200).json(search)

    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

const upHosts = async (req, res) => {
    try {
        const id = req.query.id
        let hostReq = {
            name: req.body.name,
            about: req.body.about,
            district: req.body.district,
            email: req.body.email,
            contact: req.body.contact,
            pix: req.body.pix,
            host: req.body.host,
            quantity: req.body.quantity,
            animal: req.body.animal
        }
        console.log(hostReq);


        let newHost = await Places.findByIdAndUpdate({ _id: id }, { Places: hostReq }, { new: true })
        newHost = await newHost.save()

        console.log(newHost);
        res.status(200).json({
            message: "Host updated successfully", "New host": newHost
        })
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

const upHostDois = async (req, res) => {
    try {
        const findHost = await Places.findById(req.query.id)
        console.log(findHost);

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

module.exports = {
    getAll,
    getBySearch,
    createPlace,
    upHosts,
    upHostDois
}
