//Importation des packages node
const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Importation des routes
const taskRoutes = require('./routes/task');

//Creation de la constant express
const app = express();

//Test de connexion
app.get('/', function (req, res) {
    res.status(200).send('<h1>To Do</h1>')
});

//Connexion à la base de donnée MongoDB
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_USERPW}@${process.env.DB_NAME}.zrjie.mongodb.net/?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//Gestion des erreurs CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//Récupération arguments et paramètre fourni dans le body d'une requête http
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Création des méthodes d'utilisation des routes
app.use('/api/task', taskRoutes);

//Exportation de l'application
module.exports = app;