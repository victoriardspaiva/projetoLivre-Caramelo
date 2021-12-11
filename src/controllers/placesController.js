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
    try {
        let search
        if (id) {
            search = await Places.findById(id)
        }
        if (name) {
            search = await Places.find({ name: { $regex: name } })
        }
        if (animal) {
            search = await Places.find({ animal: { $regex: animal } })
        }
        if (district) {
            search = await Places.find({ district: { $regex: district } })
        }
        if (host) {
            search = await Places.find({ host: host }) // e com quantidade > 0
        }

        console.log(search);
        res.status(200).json(search)

    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

const getBySearchDois = async (req, res) => {
    const { id, name, host, district, animal } = req.query
    let search = Places
    let teste = {}

    try {
        if (id) {
            search = await search.findById(id)
            return res.status(200).json(search)
        }

        if (name) teste.name = { $regex: name }
        if (animal) teste.animal = { $regex: animal }
        if (district) teste.district = { $regex: district }
        if (host) teste.host = host
                
        search = await search.find(teste)
        console.log(search)

        
        res.status(200).json(search)

    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

// const upHosts = async (req, res) => {
//     try {
//         const id = req.query.id
//         let hostReq = {
//             name: req.body.name,
//             about: req.body.about,
//             district: req.body.district,
//             email: req.body.email,
//             contact: req.body.contact,
//             pix: req.body.pix,
//             host: req.body.host,
//             quantity: req.body.quantity,
//             animal: req.body.animal
//         }
//         console.log(hostReq);

//         let newHost = await Places.findByIdAndUpdate({ _id: id }, { Places: hostReq }, { new: true })
//         newHost = await newHost.save()

//         console.log(newHost);
//         res.status(200).json({
//             message: "Host updated successfully", "New host": newHost
//         })
//     } catch (e) {
//         res.status(500).json({
//             message: e.message
//         })
//     }
// }

const upHostDois = async (req, res) => {
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

        console.log(findHost)
    } catch (e) {
        res.status(500).json({
            message: e.message
        })

    }
}

const deleteHost = async (req, res) => {
    try {
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
    getBySearchDois,
    createPlace,
    // upHosts,
    upHostDois,
    deleteHost
}
