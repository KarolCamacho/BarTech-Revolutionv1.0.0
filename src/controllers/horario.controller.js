const modeloHorario = require('../models/horario.model.js');
const modeloUsuario = require('../models/usuario.model.js');

exports.add = async (req, res) => {
    let buscarUsuario = await modeloUsuario.findOne({"documento":req.body.documento});
    let resultado = res.json(buscarUsuario);

    let horario = new modeloHorario({
        "hora_inicio": resultado.hora_inicio,
        "hora_fin": resultado.hora_fin,
        "fecha": req.body.fecha,
        "usuario": resultado._id,
    });
    await horario.save()
}

exports.read = async (req, res) => {
    let horario = await modeloHorario.find();
    if(horario){
        res.json(horario);
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.update = async (req, res) => {
    let horario = await modeloHorario.findOneAndUpdate(
        {"_id": req.params.id},
        {
            "hora_inicio": resultado.hora_inicio,
            "hora_fin": resultado.hora_fin,
            "fecha": req.body.fecha,
            "usuario": req.body.usuario,
        }
    );
    if(horario){
        res.json({"message": "Horario actualizado correctamente"});
    }
}

exports.delete = async (req, res) => {
    let buscarUsuario = await modeloUsuario.findOne({"documento":req.body.documento});
    let resultado = res.json(buscarUsuario);
    let horario = await modeloHorario.findOneAndDelete({"usuario": resultado._id});
    if(horario){
        res.json({"message": "Horario eliminado correctamente"});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.search = async (req, res) => {
    let buscarUsuario = await modeloUsuario.findOne({"documento":req.body.documento});
    let resultado = res.json(buscarUsuario);
    let horario = await modeloHorario.findOne({"usuario": resultado._id});
    if(horario){
        res.json({horario});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}