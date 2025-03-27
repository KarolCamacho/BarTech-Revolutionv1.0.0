const express = require('express');
const router = express.Router();

const cargo = require('../src/controllers/cargo.controller');
const categoria = require('../controllers/categoria.controller');
const cliente = require('../controllers/cliente.controller'); 
const detalleFactura = require('../controllers/detalleFactura.controller');
const entrada = require('../controllers/entrada.controller');
const factura = require('../controllers/factura.controller');
const horario = require('../controllers/horario.controller');
const producto = require('../controllers/producto.controller');
const proveedor = require('../controllers/proveedor.controller');
const usuario = require('../controllers/usuario.controller');

router.post('/cargo', cargo.add);
router.get('/cargo', cargo.read);
router.put('/cargo/:id', cargo.update);
router.delete('/cargo/:id', cargo.delete);
router.get('/cargo/:id', cargo.search);

router.post('/categoria', categoria.add);
router.get('/categoria', categoria.read);
router.put('/categoria/:id', categoria.update);
router.delete('/categoria/:id', categoria.delete);
router.get('/categoria/:id', categoria.search);

router.post('/cliente', cliente.add);
router.get('/cliente', cliente.read);
router.put('/cliente/:id', cliente.update);
router.delete('/cliente/:id', cliente.delete);
router.get('/cliente/:id', cliente.search);

router.post('/detalleFactura', detalleFactura.add);
router.get('/detalleFactura', detalleFactura.read);
router.put('/detalleFactura/:id', detalleFactura.update);
router.delete('/detalleFactura/:id', detalleFactura.delete);
router.get('/detalleFactura/:id', detalleFactura.search);

router.post('/entrada', entrada.add);
router.get('/entrada', entrada.read);
router.put('/entrada/:id', entrada.update);
router.delete('/entrada/:id', entrada.delete);
router.get('/entrada/:id', entrada.search);

router.post('/factura', factura.add);
router.get('/factura', factura.read);
router.put('/factura/:id', factura.update);
router.delete('/factura/:id', factura.delete);
router.get('/factura/:id', factura.search);

router.post('/horario', horario.add);
router.get('/horario', horario.read);
router.put('/horario/:id', horario.update);
router.delete('/horario/:id', horario.delete);
router.get('/horario/:id', horario.search);

router.post('/producto', producto.add);
router.get('/producto', producto.read);
router.put('/producto/:id', producto.update);
router.delete('/producto/:id', producto.delete);
router.get('/producto/:id', producto.search);

router.post('/proveedor', proveedor.add);
router.get('/proveedor', proveedor.read);
router.put('/proveedor/:id', proveedor.update);
router.delete('/proveedor/:id', proveedor.delete);
router.get('/proveedor/:id', proveedor.search);

router.post('/usuario', usuario.add);
router.get('/usuario', usuario.read);
router.put('/usuario/:id', usuario.update);
router.delete('/usuario/:id', usuario.delete);
router.get('/usuario/:id', usuario.search);

module.exports = router;