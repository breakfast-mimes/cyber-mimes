var path = require('path');
var bodyParser = require('body-parser');
var cors = require("cors");
var express = require('express');
var webpack = require('webpack');
var session = require('express-session');

var config = require('../../webpack.config');
var router = require('./router.js');
var auth = require('./controllers/authController');

var port = process.env.PORT || 9001;
var app = express();


var compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use(cors());
app.use(bodyParser.json());
app.use(session({
  secret: "very very secret",
  resave: false,
  saveUninitialized: true
}));

app.use("/api", auth.checkUser, router);
app.use("*", express.static(__dirname + "/../client/"));

app.post("/login", auth.checkPassword);
app.post("/logout", auth.destroySession);
app.post("/signup", auth.createUser);
app.post("/isauth", auth.checkUser, (req, res) => res.sendStatus(200));

app.listen(port, function(err) {
  if (err) console.log(err);
   console.log('Listening at port', port);
});
