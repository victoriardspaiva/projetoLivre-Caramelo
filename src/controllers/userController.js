const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserSchema = require('../models/userSchema')
const { hashPass } = require('../helpers/auth')

const register = async(req, res) => { 
    const { name, email, profile, pass } = req.body

    try { 
        const newUser = new UserSchema({
            name,
            email,
            profile,
            pass
        })
        const passHashed = await hashPass(newUser.pass, res)
        newUser.pass = passHashed

        const saveUser = await newUser.save()
        res.status(201).json({
            message: "successfully registered user", saveUser
        })
    } catch (e) {
        res.status(500).json({ message: e.message})
    }
}

module.exports = {
    register
}
