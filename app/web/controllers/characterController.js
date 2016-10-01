var db = require('../config/dbConfig.js');

//creating our hero character in db
exports.post = function(req, res) {
  console.log('REQUEST IN POST****',req.body)
	db.cypher({
    query: 'CREATE (n:Character { character: {char} }) RETURN n',
    params: {char: req.body.hero}
  }, function(err, result) {
    if(err) {
      console.log("err creating character", err)
      res.sendStatus(400);
    }
    db.cypher({
      query: 'MATCH (a:User { username: {username} }), (b:Character { character: {char} }) CREATE (a)-[:HAS_CHARACTER]->(b)',
      params: {username: req.session.user, char: req.body.hero}
    }, function(err, result) {
      if(err) {
        console.log("err creating character relation", err)
        res.sendStatus(400);
      }
      res.sendStatus(200);
    });
  });
}

//returning a single character from db that is connected to a user
exports.get = function(req, res) {
  console.log("GETTING CHARACTER", req.body);
  db.cypher({
    query: 'MATCH (a:User { username: {username} })-[:HAS_CHARACTER]-(char) RETURN char',
    params: {username: req.session.user}
  }, function(err, results) {
    if(err) {
      console.log("err fetching character", err)
      res.sendStatus(400);
    }
    if(results[0]) {
      console.log("got char", results[0].char.properties.character)
      res.json(results[0].char.properties.character);
    } else {
      res.json('[]');
    }
  });
}

exports.update = function(req, res) {
  db.cypher({
    query:'MATCH (a:User {username: {username}})-[:HAS_CHARACTER]-(char) SET char.character = {char} RETURN char',
    params: {
      username: req.session.user,
      char: req.body.hero
    }
  }, function(err, results) {
    if(err) {
      console.log("err fetching character", err)
      res.sendStatus(400);
    }
    console.log(results);
    res.sendStatus(200);
  });
}

//leaderboard query that fetches all characters
exports.getAll = function(req, res) {
  
  console.log('INSIDE GET ALL!')
  db.cypher({
    query: 'MATCH (n:Character) RETURN n LIMIT 25'
  }, function (err,result) {
      if(err) {
        console.log('error fetching all characters',err)
        res.sendStatus(400);

      }
      // consol.log('SUCCESS!!',JSON.parse(result[0].n.properties.character));

         res.send(200,result);
  }

  )
}

// exports.getAll = function(req, res) {
//   console.log("all good")
// }


