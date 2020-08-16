const mongoose = require('mongoose');

const Item = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Item', Item);