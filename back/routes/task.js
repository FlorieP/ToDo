//Importation des packages de node
const express = require('express');

//Création d'un routeur
const router = express.Router();

//Importation du controller de task
const taskCtrl = require('../controllers/task');

//Création des routes
router.get('/', taskCtrl.getAllTasks);
router.post('/new', taskCtrl.createTask);
router.get('/:id', taskCtrl.getOneTask);
router.put('/:id', taskCtrl.updateTask);
router.delete('/:id', taskCtrl.deleteTask);

//Exportation de la route Sauce
module.exports = router;