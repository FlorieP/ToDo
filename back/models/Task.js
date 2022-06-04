//Importation des package node
const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

//Création du schéma d'une tash
const taskSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    check: {type: Boolean, default: false }
});

autoIncrement.initialize(mongoose.connection);
taskSchema.plugin(autoIncrement.plugin, 'Task');

//Exportation du schéma
module.exports = mongoose.model('Task', taskSchema);