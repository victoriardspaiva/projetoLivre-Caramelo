const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserSchema = require('../models/userSchema')
const { hashPass } = require('../helpers/auth')
const userSchema = require('../models/userSchema')

// sem rota privada
const getAll = async(req, res) => {
    try {
        const user = await UserSchema.find()
        res.status(200).json({
            message: "User list", user
        })
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

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

const login = async(req, res) => {
    const { email, pass } = req.body
    try {
        const user = await userSchema.findOne({ email: email })

        if(!user) return res.status(422).send({ message: "Email not found."})

        const checkPss = await bcrypt.compare(pass, user.pass)

        if(!checkPss) return res.status(422).send({ message: "Password invalid"})

        const secret = process.env.SECRET
        const token = jwt.sign({ id: user._id}, secret)
        res.status(200).json({ message: `Login successfully, token: ${token}`})
              
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

//com rota privada
const getUser = async(req, res) => {
    const id = req.query.id

    const user = await userSchema.findById(id, '-pass')

    if (!user) return res.status(422).send({ message: "We didn't find any record with the information passed." })

    res.status(200).json({user})
}

module.exports = {
    register,
    getAll,
    login,
    getUser
}
