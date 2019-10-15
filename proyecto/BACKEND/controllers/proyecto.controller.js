const modelo = require('../models/proyecto');

const proyectoController = {};

// funcion que lista la informacion de la base de datos
proyectoController.getProyectos= async (req, res) => {
    const respuesta = await modelo.find();
    res.json(respuesta);
}

// funcion que guarda la informacion de la base de datos
proyectoController.createProyecto = async (req, res) => {
    const respuesta = new modelo({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion
    });
    await respuesta.save();
    res.json({
        'status': 'dato guardado'
    });
}

// funcion que lista la informacion de un dato especifico
proyectoController.getProyecto = async (req, res) => {
    
    const respuesta = await modelo.findById(req.params.id);
    res.json(respuesta);

}

// funcion que edita la informacion de un dato especifico
proyectoController.editProyecto = async (req, res) => {
    const { id } = req.params;
    const respuesta = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion
    }
    await modelo.findByIdAndUpdate(id, {$set: respuesta}, {new: true});
    res.json({status: 'dato actualizado'});
}

// funcion que borra la informacion de un dato especifico
proyectoController.deleteProyecto = async (req, res) => {
    await modelo.findByIdAndRemove(req.params.id);
    res.json({status: 'dato borrado'});
}

module.exports = proyectoController;