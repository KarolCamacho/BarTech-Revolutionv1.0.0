const modeloProveedor = require('../models/proveedor.model.js');

exports.add = async (req, res) => {
    let proveedor = new modeloProveedor({
        "nombre": req.body.nombre,
        "telefono": req.body.telefono,
    });
    let resultado = await proveedor.save();
    res.json(resultado);
}

exports.read = async (req, res) => {
    let proveedor = await modeloProveedor.find();
    if(proveedor){
        res.json({proveedor});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.update = async (req, res) => {
    let proveedor = await modeloProveedor.findOneAndUpdate(
        {"nombre": req.params.nombre},
        {
            "nombre": req.body.nombre,
            "telefono": req.body.telefono,
        }
    );
    if(proveedor){
        res.json({"message": "Proveedor actualizado correctamente"});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.delete = async (req, res) => {
    let proveedor = await modeloProveedor.findOneAndDelete({"nombre": req.params.nombre});
    if(proveedor){
        res.json({"message": "Proveedor eliminado correctamente"});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.search = async (req, res) => {
    let proveedor = await modeloProveedor.findOne({"nombre": req.params.nombre});
    if(proveedor){
        res.json({proveedor});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}