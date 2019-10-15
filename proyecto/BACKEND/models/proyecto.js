const mongoose = require('mongoose');
const { Schema } = mongoose;

const proyectoSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    direccion: {type: String, required: true},
})

module.exports = mongoose.model('proyecto', proyectoSchema);