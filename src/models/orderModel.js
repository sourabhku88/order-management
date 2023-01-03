const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
    },
    totalPrice: {
        type: String,
        required: true,
    },
    totalItems: {
        type: String,
        required: true,
    },
    items: {
        type: [{
            productId: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'product',
                required: true
            },
            quantity: {
                type: Number,
                default: 1,
                min: 1,
                required: true,
            }
        }],
    },
    status: {
        enm: ['pending', 'delivered', 'cancelled',],
        default: 'pending',
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('order', orderSchema)