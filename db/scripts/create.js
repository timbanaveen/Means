var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var articleArray = require('./meansData.json');

// Connection URL
var url = 'mongodb://localhost:27017/means';

var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('articles');
  // Insert some documents
  collection.insertMany(articleArray, function(err, result) {
    assert.equal(err, null);
    assert.equal(2, result.result.n);
    assert.equal(2, result.ops.length);
    console.log("Inserted 2 documents into the collection");
    callback(result);
  });
}

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  insertDocuments(db, function() {
      db.close();
  });
});
