const mongoose = require('../config/conection');

const schemaUsuario = new mongoose.Schema({
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
        min: 0,
    },
    correo: {
        type: String,
        required: true,
        unique: true,
    },
    usuario: {
        type: String,
        required: true,
        unique: true,
    },
    contrasena: {
        type: String,
        required: true,
    },
    tipo_documento: {
        type: Number,
        enum: ['CC', 'CE'], // 1: Cédula de Ciudadanía, 2: Cédula Extranjera
        default: 'CC',
    },
    documento: {
        type: Number,
        required: true,
        unique: true,
    },
    rol: {
        type: Number,
        enum: ['Administrador', 'Empleado'], // 1: Administrador, 2: Empleado
        default: 'Empleado',
    }
}, { versionKey: false });

const Usuario = mongoose.model("Usuario", schemaUsuario);
module.exports = Usuario;