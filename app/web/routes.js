
// var db = require('./db/dbConfig.js');
var router = require('express').Router();
// var db = require('./db/dbConfig.js');
var characterController = require('./controllers/characterController')
var passport = require('passport');
var Auth = require('./controllers/authentication');
var requireAuth = passport.authenticate('jwt', {session: false});
var requireSignin = passport.authenticate('local', {session: false});


// var neo4j = require('neo4j');
// //var Hero = require('../../client/data/hero.js')
// //database instance
// var db = new neo4j.GraphDatabase({
//     url: 'http://localhost:7474',
//     auth: {username: 'neo4j', password: 'cybermimes'},
// });

// route when user signs in
router.post('/user/signin', requireSignin, Auth.signin);
	// route when new user signs up
router.post('/user/signup', Auth.signup);

router.post('/createCharacter', characterController.create);
router.get('/fetchCharacter', characterController.fetch);


module.exports = router;





