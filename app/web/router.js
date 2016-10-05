var router = require('express').Router();
var characterController = require('./controllers/characterController')

router.post('/character', characterController.post);
router.get('/character', characterController.get);
router.put('/character', characterController.update);

router.get('/characters', characterController.getAll);

module.exports = router;





