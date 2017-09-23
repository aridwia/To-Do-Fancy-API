var express = require('express');
var router = express.Router();
const controllerUser = require('../controllers/controllerUser');

/* GET users listing. */
router.post('/signup', controllerUser.signUp);
router.get('/', controllerUser.getalluser);
router.put('/:id', controllerUser.updateUser);
router.delete('/:id' , controllerUser.deleteUser);
router.post('/sigin', controllerUser.signIn)


module.exports = router;
