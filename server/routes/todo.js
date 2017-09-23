const express = require('express');
const router = express.Router();
const controllerTodo = require('../controllers/controllerTodo');

router.post('/', controllerTodo.createTodo)
router.get('/', controllerTodo.getallTodo)
router.put('/:id', controllerTodo.updateTodo)
router.delete('/:id', controllerTodo.deleteTodo)


module.exports = router;
