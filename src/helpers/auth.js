const bcrypt = require('bcrypt')

exports.hashPassword = async (pass, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(pass, salt)

        return hash

    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}