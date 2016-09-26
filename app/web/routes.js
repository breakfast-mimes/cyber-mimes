
// var db = require('./db/dbConfig.js');
var router = require('express').Router();
// var db = require('./db/dbConfig.js');
var characterController = require('./controllers/characterController')


// var neo4j = require('neo4j');
// //var Hero = require('../../client/data/hero.js')
// //database instance
// var db = new neo4j.GraphDatabase({
//     url: 'http://localhost:7474',
//     auth: {username: 'neo4j', password: 'cybermimes'},
// });

router.post('/createCharacter', characterController.create);
router.get('/fetchCharacter', characterController.fetch);

module.exports = router;





