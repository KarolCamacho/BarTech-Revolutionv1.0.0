const modeloCargo = require('../models/cargo.model');
const modeloUsuario = require('../models/usuario.model');

exports.add = async (req, res) => {
    let buscarUsuario = await modeloUsuario.findOne({"documento":req.body.documento});
    let resultado = res.json(buscarUsuario);

    let cargo = new modeloCargo({
        "usuario": resultado._id,
        "roles": req.body.roles,
    });
    await cargo.save();
}

exports.read = async (req, res) => {
    let cargo = await modeloCargo.find();
    if(cargo){
        res.json(cargo);
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.update = async (req, res) => {
    let buscarUsuario = await modeloUsuario.findOne({"documento":req.body.documento});
    let resultado = res.json(buscarUsuario);

    let cargo = await modeloCargo.findOneAndUpdate(
        {"usuario": resultado._id},
        {
            "usuario": req.body.usuario,
            "roles": req.body.roles,
        }
    );
    if(cargo){
        res.json({"message": "Cargo actualizado correctamente"});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.delete = async (req, res) => {
    let buscarUsuario = await modeloUsuario.findOne({"documento":req.body.documento});
    let resultado = res.json(buscarUsuario);

    let cargo = await modeloCargo.findOneAndDelete({usuario: resultado._id});;
    if(cargo){
        res.json({"message": "Cargo eliminado correctamente"});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.search = async (req, res) => {
    let buscarUsuario = await modeloUsuario.findOne({"documento":req.body.documento});
    let resultado = res.json(buscarUsuario);

    let cargo = await modeloCargo.findOne({"usuario": resultado._id});
    if(cargo){
        res.json(cargo);
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}