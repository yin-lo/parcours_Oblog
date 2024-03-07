// Fichier qui retourne la réponse

const controller = {
	displayHomepage(req, res) {
		res.render('index');
	},
};

module.exports = controller;
