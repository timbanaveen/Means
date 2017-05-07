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
}

module.exports = initRoutes;
