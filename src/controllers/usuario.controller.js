const modeloUsuario = require('../models/usuario.model');

exports.add = async (req, res) => {
    let usuario = new modeloUsuario({
        "nombre": req.body.nombre,
        "apellidos": req.body.apellidos,
        "telefono": req.body.telefono,
        "correo": req.body.correo,
        "usuario": req.body.usuario,
        "contrasena": req.body.contrasena,
        "tipo_documento": req.body.tipo_documento,
        "documento": req.body.documento,
        "rol": req.body.rol,
    });
    await usuario.save();
    res.json({"message": "Usuario creado correctamente"});
}

exports.read = async (req, res) => {
    let usuario = await modeloUsuario.find();
    if(usuario){
        res.json({usuario});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.update = async (req, res) => {
    let usuario = await modeloUsuario.findOneAndUpdate(
        {"documento": req.params.documento},
        {
            "nombre": req.body.nombre,
            "apellidos": req.body.apellidos,
            "telefono": req.body.telefono,
            "correo": req.body.correo,
            "usuario": req.body.usuario,
            "contrasena": req.body.contrasena,
            "tipo_documento": req.body.tipo_documento,
            "documento": req.body.documento,
            "rol": req.body.rol,
        }
    );
    if(usuario){
        res.json({"message": "Usuario actualizado correctamente"});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.delete = async (req, res) => {
    let usuario = await modeloUsuario.findOneAndDelete({"documento": req.params.documento});
    if(usuario){
        res.json({"message": "Usuario eliminado correctamente"});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}

exports.search = async (req, res) => {
    let usuario = await modeloUsuario.findOne({"documento": req.params.documento});
    if(usuario){
        res.json({usuario});
    }else{
        res.status(404).json({"message": "No se encontraron registros"});
    }
}