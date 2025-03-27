const mongoose = require('../config/conection');

const schemaProveedor = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    telefono: {
        type: Number,
        required: true,
        min: 0,
    }
}, { versionKey: false });

const Proveedor = mongoose.model("Proveedor", schemaProveedor);
module.exports = Proveedor;
