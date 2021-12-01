const Places = require('../models/placesSchema')

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

module.exports = { getAll }
