
// var db = require('./db/dbConfig.js');
var neo4j = require('neo4j');
//var Hero = require('../../client/data/hero.js')
//database instance
var db = new neo4j.GraphDatabase({
    url: 'http://localhost:7474',
    auth: {username: 'neo4j', password: 'cybermimes'},
});

// db.cypher({
// //     query: 'CREATE (p:CHARACTER { name: 'Steve',strength:10, fighting:20}) RETURN p',
// //     // params: {
// //     //     email: 'alice@example.com',
// //     // },
// // }, callback);

// // db.cypher({
// //     queries: [{
// //         query: 'MATCH (user:User {email: {email}}) RETURN user',
// //         params: {
// //             email: 'alice@example.com',
// //         }


 module.exports = {
	create: function (req, res) {

		
	 // 	console.log('REQUEST BODY:', req.body);
		function queryDb(hero) {
			
		  return new Promise(function(reject, resolve){
		    db.cypher(
		    {query: 'CREATE (z:DBTEST { heroCharacter: {hero} }) RETURN z',
		    	params: {
		    		 hero: req.body.hero,
		    	
 		    	},
		    },
		    	function(err, result) {
						if(err) reject(err)
						   resolve(result)
			        	console.log('RESULT for char', result[0].z.properties);
		    	}
		    )
		  })
		}

		queryDb(req.body).then(createCharacter)
	}

	fetch: function (req, res) {

	function queryDbMatch (hero) {
		return new Promise(function(reject,resolve){
			db.cypher({
			    query: 'MATCH (z:DBTEST {heroCharacter: {hero}}) RETURN z',
			    params: {
			        hero: req.body.hero,
					},
			},
					function (err,result) {
				    	if(err) reject(err)
				    		resolve(result)
			    		console.log('MATCHED CHARACTER IN DB',result[0].z.properties.name)
					})
		})

	}
	queryDbMatch(req.body).then(matchCharacter)
		
	}

 


}
	function createCharacter(err, results) {
	  console.log('RESULT_first!!!',results)
	    if (err) throw err;
	    var result = results[0];
	    if (!result) {
        console.log('No result.');
	    } else {
        var node = result['z'];
        console.log('NODE!!!',node.properties);
	    }
	}


	function matchCharacter(err, results) {
	  //console.log('MATCH RESULT',results)
	    if (err) throw err;
	    var result = results[0];
	    if (!result) {
        console.log('No result.');
	    } else {
        var node = result['p'];
        console.log('MATCH RESULT!!!',node.properties);
	    }
	}





