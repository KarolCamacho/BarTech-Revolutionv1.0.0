const modeloCategoria = require('../models/categoria.model');
const modeloProducto = require('../models/producto.model');

exports.add = async (req, res) => {
    let buscarProducto = await modeloProducto.findOne({"nombre_producto":req.body.nombre_producto});
    let resultado = res.json(buscarProducto);

    let categoria = new modeloCategoria({
        "tipo_producto": req.body.tipo_producto,
        "producto_id": resultado._id,
    });
    await categoria.save();
    res.json({"message": "Categoria creada correctamente"});
}

exports.read = async (req, res) => {
    let categoria = await modeloCategoria.find();
    if(categoria){
        res.json(categoria);
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.update = async (req, res) => {
    let buscarProducto = await modeloProducto.findOne({"nombre_producto":req.body.nombre_producto});
    let resultado = res.json(buscarProducto);

    let categoria = await modeloCategoria.findOneAndUpdate(
        {"producto_id": resultado._id},
        {
            "tipo_producto": req.body.tipo_producto,
            "producto_id": resultado._id,
        }
    );
    if(categoria){
        res.json({"message": "Categoria actualizada correctamente"});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.delete = async (req, res) => {
    let buscarProducto = await modeloProducto.findOne({"nombre_producto":req.body.nombre_producto});
    let resultado = res.json(buscarProducto);

    let categoria = await modeloCategoria.findOneAndDelete({producto_id: resultado._id});;
    if(categoria){
        res.json({"message": "Categoria eliminada correctamente"});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.search = async (req, res) => {
    let buscarProducto = await modeloProducto.findOne({"nombre_producto":req.body.nombre_producto});
    let resultado = res.json(buscarProducto);

    let categoria = await modeloCategoria.findOne({"producto_id": resultado._id});
    if(categoria){
        res.json(categoria);
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}