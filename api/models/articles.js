var collectionKey = 'articles';

var model = {
    getAllArticles: function(db) {
        return new Promise((resolve, reject) => {
            const collection = db.collection(collectionKey);

            collection.find({}).toArray((err, docs) => {
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
