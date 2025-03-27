const mongoose = require('../config/conection');

const schemaFactura = new mongoose.Schema({
    fecha: {
        type: Date,
        required: true,
    },
    total: {
        type: mongoose.Types.Decimal128,
        required: true,
        min: 0,
    },
    cliente_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true,
    },
    usuario_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    },
    estado: {
        type: String,
        enum: ['C', 'P'], // C: Cancelado, P: Pendiente
        default: 'C',
    }
}, { versionKey: false });

const Factura = mongoose.model("Factura", schemaFactura);
module.exports = Factura;