var express = require('express');
var router = express.Router();
const controllerUser = require('../controllers/controllerUser');
const helper = require('../helper/authentikasi');

/* GET users listing. */
router.post('/signup', controllerUser.signUp);
router.get('/', helper.islogin, controllerUser.getalluser);
router.put('/:id', controllerUser.updateUser);
router.delete('/:id' , controllerUser.deleteUser);
router.post('/signin', controllerUser.signIn)


module.exports = router;
