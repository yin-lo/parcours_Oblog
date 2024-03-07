// Fichier qui retourne la réponse
const articles = require('../data/articles.json');

const controller = {
	displayHomepage(req, res) {
		res.render('index');
	},

	displayArticle(req,res){
		const article = articles.find((article) => article.id.toString() === req.params.id);
		res.render('article', {article});
	}
};

module.exports = controller;
