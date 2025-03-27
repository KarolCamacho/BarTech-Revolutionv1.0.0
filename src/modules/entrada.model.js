const mongoose = require('../config/conection');

const schemaEntrada = new mongoose.Schema({
    precio_venta: {
        type: mongoose.Types.Decimal128,
        required: true,
        min: 0, 
    },
    precio_compra: {
        type: mongoose.Types.Decimal128,
        required: true,
        min: 0,
    },
    fecha: {
        type: Date,
        required: true,
    },
    ganancias: {
        type: mongoose.Types.Decimal128,
        required: true,
    },
    perdidas: {
        type: mongoose.Types.Decimal128,
        required: true,
    },
    cambios: {
        type: Number,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
        min: 1,
    },
    producto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
        required: true, 
    },
    proveedor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proveedor',
        required: true,
    }
}, { versionKey: false });

const Entrada = mongoose.model("Entrada", schemaEntrada);
module.exports = Entrada;