const express = require('express');
const router = express.Router();
const controllerTodo = require('../controllers/controllerTodo');
const authentikasi = require('../helper/authentikasi');


router.post('/', authentikasi.islogin, controllerTodo.createTodo)
router.get('/', authentikasi.islogin, controllerTodo.getallTodo)
router.put('/:id', authentikasi.islogin, controllerTodo.updateTodo)
router.delete('/:id', authentikasi.islogin, controllerTodo.deleteTodo)

// router.post('/',  controllerTodo.createTodo)
// router.get('/',  controllerTodo.getallTodo)
// router.put('/:id',  controllerTodo.updateTodo)
// router.delete('/:id',  controllerTodo.deleteTodo)


module.exports = router;
