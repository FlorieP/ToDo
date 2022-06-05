//Importation des packages de node

//Importation du model 
const Task = require('../models/Task');

//Création du POST 
exports.createTask = (req, res, next) => {
    //Création de la nouvelle tâche
    const task = new Task({
        ...req.body
    });
    //Enregistrement de la nouvelle tâche
    task.save()
        .then(() => res.status(201).json({ message: 'Task create !' }))
        .catch(error => res.status(404).json({ message: error.message }));
};

//Création du GET ALL
exports.getAllTasks = (req, res, next) => {
    //Fonction find qui permet de trouver toutes les tâches
     Task.find().sort({_id: -1})
        //récupération du tableau de toutes les sauces retournées par la base
        .then((tasks) => { res.status(200).json(tasks); })
        .catch((error) => {
            res.status(407).json({ message: error.message });
        });
};

//Création du GET ONE
exports.getOneTask = (req, res, next) => {
    //fonction findOne qui permet de trouver une tâche en particulier
    Task.findOne({ _id: req.params.id })
        //récupération de la tâche via le paramètre id
        .then((task) => { res.status(200).json(task) })
        .catch((error) => {
            res.status(404).json({ message: error.message });
        });
};

//Création du PUT 
exports.updateTask = (req, res, next) => {
    //fonction findOne qui permet de trouver une tâche en particulier
    Task.findOne({ _id: req.params.id })
    //fonction qui permet de mettre à jour la tâche
    Task.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        //modification de la tâche via le paramètre id 
        .then(() => res.status(200).json({ message: 'Task update !' }))
        .catch(error => res.status(400).json({ message: error.message }));
};

//Création du DELETE 
exports.deleteTask = (req, res, next) => {
    //fonction findOne qui permet de trouver une tâche en particulier
    Task.findOne({ _id: req.params.id })
    //fonction qui permet de supprimer la tâche 
    Task.deleteOne({ _id: req.params.id })
    //suppression de la sauce via le paramètre id
        .then(() => res.status(200).json({ message: 'Task delete !' }))
        .catch(error => res.status(400).json({ message: error.messager }));
};