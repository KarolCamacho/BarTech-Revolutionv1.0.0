const mongoose = require('../config/conection');

const schemaCategoria = new mongoose.Schema({
    tipo_producto: {
        type: String,
        required: true,
    },
    producto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
        required: true,
    }
}, { versionKey: false });

const Categoria = mongoose.model("Categoria", schemaCategoria);
module.exports = Categoria;