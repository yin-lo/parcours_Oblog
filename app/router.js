// Fichier de routage
// gestion des URLs
const controller = require("./controller.js");

// Instanciation d'un Router Express
const { Router } = require('express');
const router = Router();

router.get('/',controller.displayHomepage);


module.exports = router;