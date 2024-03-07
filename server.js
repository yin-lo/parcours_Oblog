// Fichier de lancement de mon serveur
// Fichier de configuration du serveur

const express = require('express');
// Instanciation du serveur Express (on initialise un nouveau serveur Express et on le place dans une variable "app")
const app = express();
const PORT = 3000;

// Initialisation du moteur de rendu
app.set('views', './app/views'); // Indication du dossier contenant les fichiers .ejs
app.set('view engine', 'ejs'); // Indication du moteur de rendu (nous utilisons EJS)

/************************************************/
/*** Mise en place de la gestion des requêtes ***/
/************************************************/

// public
// /css/style.css
app.use(express.static('public'));

// appel des articles de manière globale
// const articles = require('./data/articles.json');
// app.locals.articles = articles;

// Import du router
const router = require("./app/router.js");
// Association de mon router avec mon serveur Express
app.use(router);

/************************************************/
/************************************************/
/************************************************/

app.listen(PORT, () => {
  console.log(`site accessible sur : http://localhost:${PORT}`);
});