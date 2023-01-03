const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {
    try {

        const { name, email, phone, password, address } = req.body;

        const data = await userModel.create(req.body)

        return res.status(201).send({ msg: 'user created!', data })

    } catch (error) { return res.status(500).send({ msg: error }) }
}


const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await userModel.findOne({ email })

        if (!user) return res.status(404).send({ msg: 'user not register.' });
        if (user.password === password) return res.status(400).send({ msg: 'Password is invalid!' });

        const token = jwt.sign({ id: user._id, userType: user.userType })

        return res.status(200).send({ msg: 'login succesfully', token })

    } catch (error) { return res.status(500).send({ msg: error }) }
}


module.exports = { createUser, login }