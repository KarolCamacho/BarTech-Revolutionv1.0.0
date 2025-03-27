const modeloCargo = require('../models/cargo.model');
const modeloUsuario = require('../models/usuario.model');

exports.add = async (req, res) => {
    const usuario = new modeloUsuario({
        nombre: 'Sara',
        apellidos: 'Quintero',
        telefono: '1234567890',
        correo: 'example@gmail.com',
        usuario: 'pinki',
        contraseña: '12345',
        tipo_documento: 'CC',
        documento: '1234567890',
        rol: 'Empleado',
    });
    let resultado = await usuario.save();

    const cargo = new modeloCargo({
        usuario: resultado._id,
        roles: 'Empleado',
    });
    await cargo.save();
}