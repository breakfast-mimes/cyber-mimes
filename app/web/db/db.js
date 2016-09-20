var neo4j = require('neo4j-driver').v1;

var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j"));
var session = driver.session();
session
  .run("MATCH (alice {name : {nameParam} }) RETURN alice.age", { nameParam:'Alice' })
  .then(function(result){
    result.records.forEach(function(record) {
      console.log(record);
    });
 
    // Completed! 
    session.close();
  })
  .catch(function(error) {
    console.log(error);
  });