const mongoose = require('../config/conection');

const schemaHorario = new mongoose.Schema({
    hora_inicio: {
        type: String,
        required: true,
    },
    hora_fin: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        required: true,
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    }
}, { versionKey: false });

const Horario = mongoose.model("Horario", schemaHorario);
module.exports = Horario;
