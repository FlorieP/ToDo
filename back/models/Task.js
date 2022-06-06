//Importation des package node
const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

//Création du schéma d'une tâche
const taskSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    check: {type: Boolean, default: false }
});

//Permet l'autoincrémentation de l'id 
autoIncrement.initialize(mongoose.connection);
taskSchema.plugin(autoIncrement.plugin, 'Task');

//Exportation du schéma
module.exports = mongoose.model('Task', taskSchema);