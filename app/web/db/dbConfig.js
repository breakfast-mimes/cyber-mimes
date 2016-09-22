

var Hero = require('../../client/data/hero.js')
var neo4j = require('neo4j');
console.log('HERO',Hero)



    query: 'CREATE (p:CHARACTER { name: "Harp",strength:10, fighting:20}) RETURN p',
    // params: {
    //     email: 'alice@example.com',
    // },
    


db.cypher({
>>>>>>> query fetches for db working
    query: 'MATCH (p:CHARACTER {name: {name}}) RETURN p',
    params: {
        name: 'Harp',
    },
<<<<<<< af560a32515bbc89c2f31a692a5c85ed6ef04b6a
}, callback1)

function queryDb() {
  return new Promise(function(reject, resolve){
    db.cypher({
      query: 'CREATE (p:CHARACTER { name: "Mark",strength:10, fighting:20}) RETURN p',
    } , function(err, result) {
     if(err) reject(err)
     resolve(result)
        console.log('RESULT OR ERROR', result);
    })
  })
}

queryDb().then(callback)
=======
    
}, callback1);

>>>>>>> query fetches for db working

//console.log('DB CYPHER',db.cypher)


function callback(err, results) {
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


function callback1(err, results) {
<<<<<<< af560a32515bbc89c2f31a692a5c85ed6ef04b6a
  //console.log('MATCH RESULT',results)
=======
  console.log('MATCH RESULT',results)
>>>>>>> query fetches for db working
    if (err) throw err;
    var result = results[0];
    if (!result) {
        console.log('No result.');
    } else {
        var node = result['p'];
<<<<<<< af560a32515bbc89c2f31a692a5c85ed6ef04b6a
       // console.log('MATCH RESULT!!!',node.properties);
=======
        console.log('MATCH RESULT!!!',node.properties);
>>>>>>> query fetches for db working
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













