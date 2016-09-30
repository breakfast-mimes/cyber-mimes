var db = require('../config/dbConfig.js');

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

//leaderboard query
exports.getAll = function(req, res) {
  console.log('REQUEST------>>>>>>',req)
  console.log('INSIDE GET ALL!')
  db.cypher({
    query: 'MATCH (n:Character) RETURN n LIMIT 25',
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

