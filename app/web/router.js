var router = require('express').Router();
var characterController = require('./controllers/characterController')

router.post('/character', characterController.post);
router.get('/character', characterController.get);

module.exports = router;





