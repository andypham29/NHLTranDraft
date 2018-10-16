var express = require('express');
var app = express();
var connection = require('./data_source_layer/db_connection');
var bodyParser = require('body-parser');

connection.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

var server = app.listen(5000, function() {
   console.log("app running on port.", server.address().port);
});
