const mongoose = require('../config/conection');

const schemaCliente = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true,
    },
    telefono: {
        type: Number,
        required: true,
        min: 10,
    },
    monto: {
        type: Number,
        required: true, 
        min: 0, 
    }
}, { versionKey: false });

const Cliente = mongoose.model("Cliente", schemaCliente);
module.exports = Cliente;