<<<<<<< HEAD:app/web/db/dbConfig.js


var Hero = require('../../client/data/hero.js')
var neo4j = require('neo4j');
console.log('HERO',Hero)



// //database instance
// var db = new neo4j.GraphDatabase({
//     url: 'http://localhost:7474',
//     auth: {username: 'neo4j', password: 'cybermimes'},
//     // ...
// });
// console.log('DB',db)

// cypher query language
// db.cypher({
//     query: 'CREATE (p:CHARACTER { name: 'Steve',strength:10, fighting:20}) RETURN p',
//     // params: {
//     //     email: 'alice@example.com',
//     // },
// }, callback);

=======


var Hero = require('../../client/data/hero.js')
var neo4j = require('neo4j');
console.log('HERO',Hero)



//database instance
var db = new neo4j.GraphDatabase({
    url: 'http://localhost:7474',
    auth: {username: 'neo4j', password: 'cybermimes'},
    // ...
});
// console.log('DB',db)

// cypher query language
// db.cypher({
//     query: 'CREATE (p:CHARACTER { name: 'Steve',strength:10, fighting:20}) RETURN p',
//     // params: {
//     //     email: 'alice@example.com',
//     // },
// }, callback);

>>>>>>> 5c7e4c6f86c090d26fd397f302c5e24a05e7c626:app/web/db/dbConfig.js
db.cypher({
    query: 'MATCH (p:CHARACTER {name: {name}}) RETURN p',
    params: {
        name: 'Harp',
    },
}, callback1)

function queryDb() {
  return new Promise(function(reject, resolve){
    db.cypher({
      query: 'CREATE (p:CHARACTER { name: "Mark",strength:10, fighting:20}) RETURN p',
    } , function(err, result) {
     if(err) reject(err)
     resolve(result)
<<<<<<< HEAD:app/web/db/dbConfig.js
        //console.log('RESULT OR ERROR', result);
=======
        console.log('RESULT OR ERROR', result);
>>>>>>> 5c7e4c6f86c090d26fd397f302c5e24a05e7c626:app/web/db/dbConfig.js
    })
  })
}

queryDb().then(callback)

//console.log('DB CYPHER',db.cypher)


function callback(err, results) {
<<<<<<< HEAD:app/web/db/dbConfig.js
  //console.log('RESULT_first!!!',results)
=======
  console.log('RESULT_first!!!',results)
>>>>>>> 5c7e4c6f86c090d26fd397f302c5e24a05e7c626:app/web/db/dbConfig.js
    if (err) throw err;
    var result = results[0];
    if (!result) {
       // console.log('No result.');
    } else {
        var node = result['p'];
<<<<<<< HEAD:app/web/db/dbConfig.js
       // console.log('NODE!!!',node.properties);
    }
}


function callback1(err, results) {
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







=======
        console.log('NODE!!!',node.properties);
    }
}
>>>>>>> 5c7e4c6f86c090d26fd397f302c5e24a05e7c626:app/web/db/dbConfig.js


function callback1(err, results) {
  //console.log('MATCH RESULT',results)
    if (err) throw err;
    var result = results[0];
    if (!result) {
        console.log('No result.');
    } else {
        var node = result['p'];
       // console.log('MATCH RESULT!!!',node.properties);
    }
}
// db.cypher({
//     queries: [{
//         query: 'MATCH (user:User {email: {email}}) RETURN user',
//         params: {
//             email: 'alice@example.com',
//         },
//     }, {
//         query: 'MATCH (task:WorkerTask) RETURN task',
//         lean: true,
//     }, {
//         query: 'MATCH (task:WorkerTask) DELETE task',
//     }],
//     headers: {
//         'X-Request-ID': '1234567890',
//     },
// }, callback);

// function callback(err, batchResults) {
//     if (err) throw err;

//     var userResults = batchResults[0];
//     var taskResults = batchResults[1];
//     var deleteResults = batchResults[2];

//     // User results:
//     var userResult = userResults[0];
//     if (!userResult) {
//         console.log('No user found.');
//     } else {
//         var user = userResult['user'];
//         console.log('User %s (%s) found.', user._id, user.properties.name);
//     }

//     // Worker task results:
//     if (!taskResults.length) {
//         console.log('No worker tasks to process.');
//     } else {
//         taskResults.forEach(function (taskResult) {
//             var task = taskResult['task'];
//             console.log('Processing worker task %s...', task.operation);
//         });
//     }

//     // Delete results (shouldn’t have returned any):
//     //assert.equal(deleteResults.length, 0);
// };













