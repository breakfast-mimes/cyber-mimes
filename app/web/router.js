var router = require('express').Router();
var characterController = require('./controllers/characterController')

router.post('/character', characterController.create);
router.get('/character', characterController.fetch);

module.exports = router;





