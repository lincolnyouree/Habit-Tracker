var express = require('express');
var router = express.Router();
const habitsCtrl = require('../controllers/habits');

/* GET home page. */
router.get('/', habitsCtrl.index);
router.post('/habits', habitsCtrl.create);
router.delete('/habits/:id', habitsCtrl.delete);
router.get('/habits/:id', habitsCtrl.show);
router.put('/habits/:id', habitsCtrl.update);


module.exports = router;
