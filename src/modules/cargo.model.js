const mongoose = require('../config/conection');

const schemaCargo = new mongoose.Schema({
    usuario_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    },
    roles: {
        type: Number,
        enum: ['Administrador', 'Empleado'], // 1: Administrador, 2: Empleado
        default: 'Empleado',
    },
    salario: {
        type: mongoose.Types.Decimal128,
        required: true,
        min: 0,
    }
}, { versionKey: false });

const Cargo = mongoose.model("Cargo", schemaCargo);
module.exports = Cargo;