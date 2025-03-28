const modeloEntrada = require('../models/entrada.model');
const modeloProducto = require('../models/producto.model');
const modeloProveedor = require('../models/proveedor.model');

exports.add = async (req, res) => {
    let buscarProducto = await modeloProducto.findOne({"nombre_producto":req.body.nombre_producto});
    let resultado = res.json(buscarProducto);

    let buscarProveedor = await modeloProveedor.findOne({"nombre_proveedor":req.body.nombre_proveedor});
    let resultadoProveedor = res.json(buscarProveedor);

    let entrada = new modeloEntrada({
        "precio_venta": req.body.precio_venta,
        "precio_compra": req.body.precio_compra,
        "fecha": req.body.fecha,
        "ganancias": req.body.ganancias,
        "perdidas": req.body.perdidas,
        "cambios": req.body.cambios,
        "cantidad": req.body.cantidad,
        "producto_id": resultado._id,
        "proveedor_id": resultadoProveedor._id,
    });
    await entrada.save();
    res.json({"message": "Entrada creada correctamente"});
}

exports.read = async (req, res) => {
    let entrada = await modeloEntrada.find();
    if(entrada){
        res.json(entrada);
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.update = async (req, res) => {
    let entrada = await modeloEntrada.findOneAndUpdate(
        {"_id": req.body._id},
        {
            "precio_venta": req.body.precio_venta,
            "precio_compra": req.body.precio_compra,
            "fecha": req.body.fecha,
            "ganancias": req.body.ganancias,
            "perdidas": req.body.perdidas,
            "cambios": req.body.cambios,
            "cantidad": req.body.cantidad,
            "producto_id": resultado._id,
            "proveedor_id": resultadoProveedor._id,
        }
    );
    if(entrada){
        res.json({"message": "Entrada actualizada correctamente"});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.delete = async (req, res) => {
    let entrada = await modeloEntrada.findOneAndDelete({"_id": req.body._id});
    if(entrada){
        res.json({"message": "Entrada eliminada correctamente"});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.search = async (req, res) => {
    let entrada = await modeloEntrada.findOne({"_id": req.body._id});
    if(entrada){
        res.json(entrada);
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}