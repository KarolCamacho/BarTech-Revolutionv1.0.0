const modeloProducto = require('../models/producto.model.js');

exports.add = async (req, res) => {
    let producto = new modeloProducto({
        "nombre_producto": req.body.nombre_producto,
        "precios": req.body.precios,
        "stock": req.body.stock,
    });
    let resultado = await producto.save();
    res.json({"message": "Producto agregado correctamente", "producto": resultado});
}

exports.read = async (req, res) => {
    let producto = await modeloProducto.find();
    if(producto){
        res.json({producto});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.update = async (req, res) => {
    let producto = await modeloProducto.findOneAndUpdate(
        {"nombre_producto": req.params.nombre_producto},
        {
            "nombre_producto": req.body.nombre_producto,
            "precios": req.body.precios,
            "stock": req.body.stock,
        }
    );
    if(producto){
        res.json({"message": "Producto actualizado correctamente"});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.delete = async (req, res) => {
    let producto = await modeloProducto.findOneAndDelete({"nombre_producto": req.params.nombre_producto});
    if(producto){
        res.json({"message": "Producto eliminado correctamente"});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.search = async (req, res) => {
    let producto = await modeloProducto.findOne({"nombre_producto": req.params.nombre_producto});
    if(producto){
        res.json({producto});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}