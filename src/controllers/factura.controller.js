const modeloFactura = require('../models/factura.model');
const modeloCliente = require('../models/cliente.model');
const modeloUsuario = require('../models/usuario.model');

exports.add = async (req, res) => {
    let buscarCliente = await modeloCliente.findOne({"nombre":req.body.nombre});
    let resultado = res.json(buscarCliente);

    let buscarUsuario = await modeloUsuario.findOne({"documento":req.body.documento});
    let resultadoUsuario = res.json(buscarUsuario);

    let factura = new modeloFactura({
        "fecha": req.body.fecha,
        "total": req.body.total,
        "cliente_id": resultado._id,
        "usuario_id": resultadoUsuario._id,
        "estado": req.body.estado,
    });
    await factura.save();
    res.json({"message": "Factura creada correctamente"});
}

exports.read = async (req, res) => {
    let factura = await modeloFactura.find();
    if(factura){
        res.json(factura);
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.update = async (req, res) => {
    let buscarCliente = await modeloCliente.findOne({"nombre":req.body.nombre});
    let resultado = res.json(buscarCliente);

    let buscarUsuario = await modeloUsuario.findOne({"documento":req.body.documento});
    let resultadoUsuario = res.json(buscarUsuario);

    let factura = await modeloFactura.findOneAndUpdate(
        {"cliente_id": resultado._id},
        {
            "fecha": req.body.fecha,
            "total": req.body.total,
            "cliente_id": resultado._id,
            "usuario_id": resultadoUsuario._id,
            "estado": req.body.estado,
        }
    );
    if(factura){
        res.json({"message": "Factura actualizada correctamente"});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.delete = async (req, res) => {
    let buscarCliente = await modeloCliente.findOne({"nombre":req.body.nombre});
    let resultado = res.json(buscarCliente);

    let factura = await modeloFactura.findOneAndDelete({"cliente_id": resultado._id});
    if(factura){
        res.json({"message": "Factura eliminada correctamente"});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.search = async (req, res) => {
    let buscarCliente = await modeloCliente.findOne({"nombre":req.body.nombre});
    let resultado = res.json(buscarCliente);

    let factura = await modeloFactura.findOne({"cliente_id": resultado._id});
    if(factura){
        res.json({factura});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

