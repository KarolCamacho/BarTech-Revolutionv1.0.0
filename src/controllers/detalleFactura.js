const moduloFactura = require('../models/detalleFactura.js');
const modeloProducto = require('../models/producto.model');
const modeloFactura = require('../models/factura.model');

exports.add = async (req, res) => {
    let buscarProducto = await modeloProducto.findOne({"nombre_producto":req.body.nombre_producto});
    let resultado = res.json(buscarProducto);

    let buscarFactura = await modeloFactura.findOne({"_id":req.body.factura_id});
    let resultadoFactura = res.json(buscarFactura);

    let detalleFactura = new moduloFactura({
        "cantidad": req.body.cantidad,
        "precios": req.body.precios,
        "factura_id": resultadoFactura._id,
        "producto_id": resultado._id,
    });
    await detalleFactura.save();
    res.json({"message": "Detalle de factura creado correctamente"});
}

exports.read = async (req, res) => {
    let detalleFactura = await moduloFactura.find();
    if(detalleFactura){
        res.json(detalleFactura);
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.update = async (req, res) => {
    let buscarProducto = await modeloProducto.findOne({"nombre_producto":req.body.nombre_producto});
    let resultado = res.json(buscarProducto);

    let buscarFactura = await modeloFactura.findOne({"_id":req.body.factura_id});
    let resultadoFactura = res.json(buscarFactura);

    let detalleFactura = await moduloFactura.findOneAndUpdate(
        {"producto_id": resultado._id},
        {
            "cantidad": req.body.cantidad,
            "precios": req.body.precios,
            "factura_id": resultadoFactura._id,
            "producto_id": resultado._id,
        }
    );
    if(detalleFactura){
        res.json({"message": "Detalle de factura actualizado correctamente"});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.delete = async (req, res) => {
    let detalleFactura = await moduloFactura.findOneAndDelete({"_id": req.body._id});;
    if(detalleFactura){
        res.json({"message": "Detalle de factura eliminado correctamente"});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.search = async (req, res) => {
    let detalleFactura = await moduloFactura.findOne({"_id": req.body._id});
    if(detalleFactura){
        res.json(detalleFactura);
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}