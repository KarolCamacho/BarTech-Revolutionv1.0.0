const modeloUsuario = require('../models/usuario.model');

exports.add = async (req, res) => {
    const usuario = new modeloUsuario({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        telefono: req.body.telefono,
        correo: req.body.correo,
        usuario: req.body.usuario,
        contraseña: req.body.contraseña,
        tipo_documento: req.body.tipo_documento,
        documento: req.body.documento,
        rol: req.body.rol,
    });
    await usuario.save();
}