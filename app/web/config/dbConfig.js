var neo4j = require('neo4j');
var connection = new neo4j.GraphDatabase({
    url: 'http://hobby-jimnaomjfhocgbkegmbfaenl.dbs.graphenedb.com:24789/db/data/',
    auth: {username: 'cyber_mimes', password: 'YYVFm2sWEmj8u6UCQX40'},
});


module.exports = connection;