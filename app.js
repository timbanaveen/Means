const mongoServices = require('./services/mongoServices');
const routes = require('./api/routes');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

// serve client code
app.use(express.static('public'));

// allow cors
app.use(cors());

// get json data from req body
app.use(bodyParser());

// create connection of mongo, this single connection is used for all db operations.
mongoServices.createConnection(app);
// initialize routes of express.
routes(app);

app.listen(port, function() {
    console.log('App listening on port 3000 !!!');
});
