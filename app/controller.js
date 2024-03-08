// Fichier qui retourne la réponse
const articles = require('../data/articles.json');

const controller = {
	displayHomepage(req, res) {
		res.render('index');
	},

	displayArticle(req,res){
		const article = articles.find((article) => article.id.toString() === req.params.id);
		res.render('article', {article});
	},

	displayCategory(req,res){
		const article = articles.find((article) => article.category === req.params.category);
	// avec le find il ne prend que le premier article.
	// faire un for of puis un if qui recherche tous les articles de la meme category
		console.log(req.params.category);

		res.render('category', {article});
	}
};

module.exports = controller;
