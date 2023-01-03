const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    productImage: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    size: {
        type: [String],
        enm: ['x', 's', 'xxl', 'm'],
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('product', productSchema)