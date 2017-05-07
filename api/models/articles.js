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
    }
};

module.exports = model;
