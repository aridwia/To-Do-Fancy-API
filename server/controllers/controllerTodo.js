const todo = require('../models/Todo');

var createTodo = (req,res) => {
  todo.create({
    title: req.body.title,
    content: req.body.content,
    createdby: req.body.createdby
  })
  .then(datacreated => {
    res.send(datacreated)
  })
  .catch(err => {
    res.send(err)
  })
}

var getallTodo = (req,res) => {
  todo.find({})
  .then(alldata => {
    res.send(alldata)
  })
  .catch(err => {
    res.send(err)
  })
}

var updateTodo = (req,res) => {
  todo.updateOne({
    _id: req.params.id
  },{
    title: req.body.title,
    content: req.body.content,
    createdby: req.body.createdby
  })
  .then(dataupdate => {
    res.send(dataupdate)
  })
  .catch(err => {
    res.send(err)
  })
}

var deleteTodo = (req,res) => {
  todo.deleteOne({
    _id: req.params.id
  })
  .then(deletedTodo => {
    res.send(deletedTodo)
  })
  .catch(err => {
    res.send(err)
  })
}


module.exports = {createTodo,getallTodo,updateTodo,deleteTodo};
