const articles = require('./models/articles');

/* Init Routes for Application */
function initRoutes(app) {
    /**
     * Get all articles and all relevant data related to article. 
     */
     app.get('/articles', function(req, res) {
        articles.getAllArticles(app.locals.db)
            .then((allArticles) => {
                res.json(allArticles);
            })
            .catch((err) => {
                console.error(err.stack);
                res.status(400).send(err.message);
            });
     });

     /**
      * Get article having id equal to passed id.
      */
     app.get('/article/:articleId', function(req, res) {
        const articleId = req.params.articleId;

        articles.getArticle(app.locals.db, articleId)
            .then((article) => {
                res.json(article);
            })
            .catch((err) => {
                console.error(err.stack);
                res.status(400).send(err.message);
            }); // doing same thing in catch, should move to middleware.
     });
}

module.exports = initRoutes;
