const mongoose = require('../config/conection');

const schemaDetalleFactura = new mongoose.Schema({
    cantidad: {
        type: Number,
        required: true, 
        min: 1,
    },
    precios: {
        type: mongoose.Types.Decimal128,
        required: true, 
        min: 0, 
    },
    factura_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Factura',
        required: true, 
    },
    producto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
        required: true, 
    }
}, { versionKey: false });

const DetalleFactura = mongoose.model("DetalleFactura", schemaDetalleFactura);
module.exports = DetalleFactura;