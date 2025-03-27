const mongoose = require('../config/conection')

const schemaProducto = new mongoose.Schema ({
    nombre_producto: {
        type: String,
        required: true,
    },
    precios: {
        type: Number,
        required: true,
        min: 0,
    },
    stock: {
        type: Number,
        default: 0,
        min: 0,
    }
},{ versionKey: false });

const Producto = mongoose.model("Producto", schemaProducto);
module.exports = Producto;