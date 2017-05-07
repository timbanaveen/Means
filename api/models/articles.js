const ObjectID = require('mongodb').ObjectID;

const articlesCollectionKey = 'articles';

/**
 * Object which holds all methods to fetch data.
 * 
 * quering collection in each method, 
 * as it may happen that some data is stored in different collection of same db
 */
const model = {
    getAllArticles: function(db) {
        return new Promise((resolve, reject) => {
            const collection = db.collection(articlesCollectionKey);

            collection.find({}).toArray((err, docs) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(docs);
                }
            });
        });
    },

    getArticle: function(db, id) {
        return new Promise((resolve, reject) => {
            const collection = db.collection(articlesCollectionKey);

            collection.find({ _id: ObjectID(id) }).toArray((err, docs) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(docs);
                }
            });
        });
    },

    addComment: function(db, articleId, comment) {
        return new Promise((resolve, reject) => {
            const collection = db.collection(articlesCollectionKey);

            collection.update(
                { _id: ObjectID(articleId) },
                { $push: {comments: comment} },
                function(err) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve();
                    }
                } );
        });
    },

    getComments: function(db, id) {
        return new Promise((resolve, reject) => {
            const collection = db.collection(articlesCollectionKey);

            collection.find({ _id: ObjectID(id) }).toArray((err, docs) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(docs[0].comments);
                }
            });
        });
    }
};

module.exports = model;
