var express = require ('express');
var bodyParser = require('body-parser');
var router = require('express').Router();
var path = require('path');
var cors = require("cors");

/* Initialize the server */
let app = express();
/* Add middleware */
app.use(cors());
app.use(bodyParser.json());

app.use("/", express.static(__dirname + "../client/"));

app.get('/*', (req, res) => {
	res.send('hello');

})

app.listen(1337) => {
	console.log('listening to TEST!')
}

module.exports = app;