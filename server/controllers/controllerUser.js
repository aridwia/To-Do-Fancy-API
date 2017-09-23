const user = require('../models/User');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

var createUser = (req,res) => {
  var hash = bcrypt.hashSync(req.body.password,salt)
  user.create({
    username: req.body.username,
    password: hash,
    fullname: req.body.fullname
  })
  .then(dataUser => {
    res.send(dataUser)
  })
  .catch(err => {
    res.send(err)
  })
}

var getalluser = (req,res) => {
  user.find({})
  .then(alluser => {
    res.send(alluser)
  })
  .catch(err => {
    res.send(err)
  })
}

var updateUser = (req,res) => {
  var hash = bcrypt.hashSync(req.body.password, hash)
  user.updateOne({
    _id: req.params.id
  },{
    username: req.body.username,
    password: hash,
    fullname: req.body.fullname
  })
  .then(user => {
    res.send(user)
  })
  .catch(err => {
    res.sed(err)
  })
}

var deleteUser = (req,res) => {
  user.deleteOne({
    _id: req.params.id
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {createUser,getalluser,updateUser,deleteUser};
