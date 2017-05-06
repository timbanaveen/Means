var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/means';

function createConnection(app) {
    MongoClient.connect(url, function(err, db) {
        if (err) {
            throw new Error(err);
        }

        app.locals.db = db;
    });
}

module.exports = {
    createConnection
};
