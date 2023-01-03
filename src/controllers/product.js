const productModel = require('../models/productModel');

const createProduct = async (req, res) => {
    try {

        const { productName, category, price, description, size } = req.body;

        const data = await productModel.create(req.body)

        return res.status(201).send({ msg: 'product created!', data })

    } catch (error) { return res.status(500).send({ msg: error }) }
}


const getAll = async (req, res) => {
    try {

        const products = await productModel.find()

        if (!products) return res.status(404).send({ msg: 'products not there.' });

        return res.status(200).send({ msg: 'all products ',products })

    } catch (error) { return res.status(500).send({ msg: error }) }
}


module.exports = { createProduct, getAll }