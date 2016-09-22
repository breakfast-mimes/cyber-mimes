

// var db = require('./db/dbConfig.js');

var db = require('./db/dbConfig.js');

var router = require('express').Router();
var neo4j = require('neo4j');
var Hero = require('../../client/data/hero.js')

//database instance
var db = new neo4j.GraphDatabase({
    url: 'http://localhost:7474',
    auth: {username: 'neo4j', password: 'cybermimes'},
    // ...
});


// router.post('/character', function (req, res) {
	function queryDb() {
	  return new Promise(function(reject, resolve){
	    db.cypher({
	      query: 'CREATE (p:CHARACTER { name: "Mark",strength:10, fighting:20}) RETURN p',
	    	},function(err, result) {
					     if(err) reject(err)
					     resolve(result)
		        	console.log('RESULT for char name', result[0].p.properties.name);
	    		})
	  })
	}

// })

	queryDb().then(createCharacter)


function queryDbMatch () {
	return new Promise(function(reject,resolve){
		db.cypher({
		    query: 'MATCH (p:CHARACTER {name: {name}}) RETURN p',
		    params: {
		        name: 'Mark',
				},
		},
				function (err,result) {
			    	if(err) reject(err)
			    		resolve(result)
		    		console.log('MATCHED CHARACTER IN DB',result[0].p.properties.name)
				})
	})

}

queryDbMatch().then(matchCharacter)





function matchCharacter(err, results) {
  //console.log('MATCH RESULT',results)
    if (err) throw err;
    var result = results[0];
    if (!result) {
       // console.log('No result.');
    } else {
        var node = result['p'];
       // console.log('MATCH RESULT!!!',node.properties);
    }
}


function createCharacter(err, results) {
  console.log('RESULT_first!!!',results)
    if (err) throw err;
    var result = results[0];
    if (!result) {
        console.log('No result.');
    } else {
        var node = result['p'];
        console.log('NODE!!!',node.properties);
    }

}


