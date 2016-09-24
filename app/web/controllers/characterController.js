
// var db = require('./db/dbConfig.js');
var neo4j = require('neo4j');
//var Hero = require('../../client/data/hero.js')
//database instance
var db = new neo4j.GraphDatabase({
    url: 'http://localhost:7474',
    auth: {username: 'neo4j', password: 'cybermimes'},
});


 module.exports = {
	create: function (req, res) {
		console.log('inside characterController!!', req.body);
	 // 	console.log('REQUEST BODY:', req.body);
		function queryDb(hero) {
			console.log('HERO!!!',hero);
		  return new Promise(function(reject, resolve){
		    db.cypher(
		    {query: 'CREATE (p:CHARACTER { name: "Mark",strength:10, fighting:20}) RETURN p'},
		    	function(err, result) {
						if(err) reject(err)
						   resolve(result)
			        	console.log('RESULT for char name', result[0].p.properties.name);
		    	}
		    )
		  })
		}

		queryDb(req.body).then(createCharacter)
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


	// function queryDbMatch () {
	// 	return new Promise(function(reject,resolve){
	// 		db.cypher({
	// 		    query: 'MATCH (p:CHARACTER {name: {name}}) RETURN p',
	// 		    params: {
	// 		        name: 'Mark',
	// 				},
	// 		},
	// 				function (err,result) {
	// 			    	if(err) reject(err)
	// 			    		resolve(result)
	// 		    		console.log('MATCHED CHARACTER IN DB',result[0].p.properties.name)
	// 				})
	// 	})

	// }

	// queryDbMatch().then(matchCharacter)





	// function matchCharacter(err, results) {
	//   //console.log('MATCH RESULT',results)
	//     if (err) throw err;
	//     var result = results[0];
	//     if (!result) {
	//        // console.log('No result.');
	//     } else {
	//         var node = result['p'];
	//        // console.log('MATCH RESULT!!!',node.properties);
	//     }
	// }





