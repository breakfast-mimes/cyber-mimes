var neo4j = require('neo4j');
var config = require('./config');

var connection = new neo4j.GraphDatabase({
    url: config.DB_URL,
    auth: {username: config.DB_USERNAME, password: config.DB_PASSWORD},
});

module.exports = connection;