var express = require('express');
var router = express.Router();
const controllerUser = require('../controllers/controllerUser');

/* GET users listing. */
router.post('/', controllerUser.createUser);
router.get('/', controllerUser.getalluser);
router.put('/:id', controllerUser.updateUser);
router.delete('/:id' , controllerUser.deleteUser);


module.exports = router;
