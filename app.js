const mongoServices = require('./services/mongoServices');
const routes = require('./api/routes');

const express = require('express');
const app = express();

const port = 3000;

// create connection of mongo, this single connection is used for all db operations.
mongoServices.createConnection(app);
// initialize routes of express.
routes(app);

app.listen(port, function() {
    console.log('App listening on port 3000 !!!');
});
