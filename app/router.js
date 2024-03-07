// Fichier de routage
// gestion des URLs
const controller = require('./controller.js');

// Instanciation d'un Router Express
const { Router } = require('express');
const router = Router();

// middleware qui initialise les articles 
const articles = require('../data/articles.json');
router.use((req, res, next) => {
	res.locals.articles = articles;
	
	next();
});

// Route vers la page d'accueil
router.get('/', controller.displayHomepage);

module.exports = router;
