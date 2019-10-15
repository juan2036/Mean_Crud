const express = require('express');
const router = express.Router();

const proControler = require('../controllers/proyecto.controller');

// lista la informacion de toda la base de datos
router.get('/', proControler.getProyectos);

// brinda la opcion de guardar datos
router.post('/', proControler.createProyecto);

// brinda la informacion de un dato especifico
router.get('/:id', proControler.getProyecto);

// permite editar la informacion de un dato
router.put('/:id', proControler.editProyecto);

//permite borrar un dato
router.delete('/:id', proControler.deleteProyecto);

module.exports = router;