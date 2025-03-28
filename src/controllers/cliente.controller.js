const modeloCliente = require('../models/cliente.model');

exports.add = async (req, res) => {
    let cliente = new modeloCliente({
        "nombre": req.body.nombre,
        "apellidos": req.body.apellidos,
        "telefono": req.body.telefono,
        "monto": req.body.monto,
    });
    await cliente.save();
    res.json({"message": "Cliente creado correctamente"});
}

exports.read = async (req, res) => {
    let cliente = await modeloCliente.find();
    if(cliente){
        res.json(cliente);
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.update = async (req, res) => {
    let cliente = await modeloCliente.findOneAndUpdate(
        {"_id": req.params.id},
        {
            "nombre": req.body.nombre,
            "apellidos": req.body.apellidos,
            "telefono": req.body.telefono,
            "monto": req.body.monto,
        }
    );
    if(cliente){
        res.json({"message": "Cliente actualizado correctamente"});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.delete = async (req, res) => {
    let cliente = await modeloCliente.findOneAndDelete({_id: req.params.id});
    if(cliente){
        res.json({"message": "Cliente eliminado correctamente"});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.search = async (req, res) => {
    let cliente = await modeloCliente.findOne({"_id": req.params.id});
    if(cliente){
        res.json(cliente);
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}