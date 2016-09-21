// //Require the Neo4J module
// var neo4j = require('node-neo4j');

// //Create a db object. We will using this object to work on the DB.
// db = new neo4j('http://localhost:7474');
// console.log('DATABASE',db);

// //Let’s create a node
// db.insertNode({

//   name: 'Ghuffran',
//   company: 'Modulus',
//   age: ~~(Math.random() * 100)
// }, function (err, resp) {
//   console.log('response', res);
//   if (err) {
//     return console.log('ERROR!!',err);
//   }

//   // Output node data.
//   console.log('NODE',resp);
// });


var neo4j = require('neo4j');

//database instance
var db = new neo4j.GraphDatabase({
    url: 'http://localhost:7474',
    auth: {username: 'neo4j', password: 'cybermimes'},
    // ...
});
console.log('DB',db)

//cypher query language
db.cypher({
    query: 'CREATE (p:TEST { title: "MKS",released:2016}) RETURN p',
    // params: {
    //     email: 'alice@example.com',
    // },
    
}, callback);
//console.log('DB CYPHER',db.cypher)


function callback(err, results) {
  console.log('RESULT!!!',results)
    if (err) throw err;
    var result = results[0];
    if (!result) {
        console.log('No result.');
    } else {
        var node = result['p'];
        console.log('NODE!!!',node.properties.title);
    }
};

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









