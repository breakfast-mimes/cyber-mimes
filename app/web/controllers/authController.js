var bcrypt = require('bcrypt-nodejs');
var db = require('../config/dbConfig.js');

exports.createUser = function(req, res){
  console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;
  // User.find({ username: username }, function(err, users){
  //   if(!users || !users.length)
  //     bcrypt.hash(password, null, null, function(err, hash){
  //       new User({
  //         name: name,
  //         username: username,
  //         password: hash
  //       }).save(function(err, user) {
  //         console.log("created");
  //         res.send(201); // Created!
  //       });
  //     });
  //   else res.send(409); // Username was taken.
  // });

  bcrypt.hash(password, null, null, function(err, hash) {
    db.cypher({
      query: 'CREATE (a:User { username: {username}, password: {hash} })',
      params: { username, hash }
    }, function(err, result) {
      if(err) console.log('err', err)
      console.log('result', result);
      res.sendStatus(201);
    });
  })
}

exports.checkUser = function(req, res, next) {
  if (!(req.session ? !!req.session.user : false)) res.send(401);
  else next();
};


exports.checkPassword = function(req, res){
  console.log('login', req.body.username, req.body.password);
  User.find({ "username": req.body.username }, function(err, found) {
    foundUser = found[0];
    if(foundUser)
      bcrypt.compare(req.body.password, foundUser.password, function(err, result){
        if(result)
          req.session.regenerate(function(){
            req.session.user = foundUser.name;
            res.send(200);
          });
        else res.send(401);
      });
    else res.send(401); // No user found.
  });
}

exports.destroySession = function(req, res) {
  req.session.destroy();
  res.redirect("/");
  console.log("destroyed")
}
