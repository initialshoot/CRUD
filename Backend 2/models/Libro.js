const mongoose = require('mongoose');

const LibroSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    editorial: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    units: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Libro', LibroSchema);