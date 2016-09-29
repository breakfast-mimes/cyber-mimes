var router = require('express').Router();
var characterController = require('./controllers/characterController')

router.post('/character', characterController.post);
router.get('/character', characterController.get);
router.get('/characters', characterController.getAll);

module.exports = router;





