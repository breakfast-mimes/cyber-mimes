var passport = require('passport');
var jwt = require('jwt-simple');


module.exports = {
	signin: function(req, res, next) {
		res.send({ token: tokenForUser(req.user), name: req.user.attributes.name, email: req.user.attributes.email});
	},

	signup: function(req, res, next) {
		var email = req.body.email;
		var name = req.body.name;

		if(!email || !password) {
			return res.status(422).send({ error: 'You must provide email and password' });
		}

		// See if a user with given email exists //change to neo4j query
		new User({ email: email }).fetch().then(function(found) {

			// If a user with email does exist, return an error
			if (found) {
				return res.status(422).send({ error: 'Email is in use' });
			}

			// If a use with email does NOT exist, create and save user record
			//make a 'create' query for new user in neo4j
			var user = new User({
				email: email,
				name: name
			});

			user.save().then(function(newUser) {
				console.log('New user created');
				Users.add(newUser);

				// Respond to request indicating the user was created
				res.json({ token: tokenForUser(user) });
			});
		});
	}


}

	function tokenForUser(user) {
	console.log('tokenForUser fired');
	console.log('user id in tokenForUser is : ',user.id);
	var timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timestamp }, EnvConfig.secret);
}















