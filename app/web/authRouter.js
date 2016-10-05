var router = require('express').Router();
var auth = require('./controllers/authController');

router.post("/login", auth.checkPassword);
router.post("/logout", auth.destroySession);
router.post("/signup", auth.createUser);
router.post("/isauth", auth.checkUser, (req, res) => res.sendStatus(200));

module.exports = router;