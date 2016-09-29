var db = require('../config/dbConfig.js');

exports.post = function(req, res) {
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
  db.cypher({
    query: 'MATCH (n:Character) RETURN n'
  }, function (err,result) {
      if(err) {
        console.log('error fetching all characters',err)
        res.sendStatus(400);

      }
        res.sendStatus(200);
    }

  )

}

