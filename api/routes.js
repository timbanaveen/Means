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

     /**
      * Push comment in given article.
      */
    app.post('/comment/:articleId', function(req, res) {
        const articleId = req.params.articleId;

        let commentObj = {
            type: req.body.type,
            comment: req.body.comment
        };

        const linkInfo = req.body.linkInfo;
        if (linkInfo) {
            commentObj.linkInfo = req.body.linkInfo;
        }

        Promise.all([ 
            articles.addComment(app.locals.db, articleId, commentObj),
            articles.getComments(app.locals.db, articleId)
         ])
         .then((comments) => {
            res.json(comments[1]);
         })
         .catch((err) => {
            console.error(err.stack);
            res.status(400).send(err.message);
        });
    });
}

module.exports = initRoutes;
