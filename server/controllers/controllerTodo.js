const todo = require('../models/Todo');

var createTodo = (req,res) => {
  todo.create({
    title: req.body.title,
    content: req.body.content,
    createdby: req.id
  })
  .then(datacreated => {
    res.send(datacreated)
  })
  .catch(err => {
    res.send(err)
  })
}

var getallTodo = (req,res) => {
  todo.find({createdby: req.id})
  // todo.find({})
  .then(alldata => {
    console.log(req.id);
    res.send(alldata)
  })
  .catch(err => {
    res.send(err)
  })
}

var updateTodo = (req,res) => {
  // console.log('iniidnya dwi',req.id);
  todo.findById({_id: req.params.id})
  .then(alldata => {
    console.log('inialldata' , alldata);
    console.log('ini req.id', req.id);
    if(alldata.createdby == req.id){
      console.log('masuk sini ga');
      alldata.title= req.body.title,
      alldata.content= req.body.content
      alldata.save((err, newtodo) => {
        if(err) {
          res.send(err)
        } else res.send(newtodo)
      })
    } else {
      console.log('masuk sini else ya');
      res.send('you don\'t have authorized')
    }
  })
  .catch(err => {
    res.send(err)
  })
}

var deleteTodo = (req,res) => {
  todo.findById({_id: req.params.id})
  .then(alldata => {
    if(alldata.createdby == req.id){
    todo.deleteOne({
      _id: alldata._id
    })
    .then(deletedTodo => {
      res.send(deletedTodo)
    })
    .catch(err => {
      res.send('masuk eror atas')
    })
  } else { res.send('you dont have authorized')}
  })
  .catch(err => {
    res.send('masuk eror bawah')
  })
}

// update versi 2
// var updateTodo = (req,res) => {
//   // console.log('iniidnya dwi',req.id);
//   todo.find({createdby: req.id})
//   .then(alldata => {
//     console.log('inialldata' , alldata);
//     console.log('ini req.id', req.id);
//     if(alldata.createdby == req.id){
//       todo.updateOne({
//       _id: req.params.id
//       },{
//       title: req.body.title,
//       content: req.body.content,
//       })
//       .then(dataupdate => {
//         console.log('ini req.id',req.id)
//         console.log('ini createdby', dataupdate.createdby);
//         res.send(dataupdate)
//       })
//       .catch(err => {
//         res.send(err)
//       })
//     } else { res.send('bukan data anda')}
//   })
//   .catch(err => {
//     res.send(err)
//   })
// }


// var updateTodo = (req,res) => {
//   todo.updateOne({
//     _id: req.params.id
//   },{
//     title: req.body.title,
//     content: req.body.content,
//     createdby: req.body.createdby
//   })
//   .then(dataupdate => {
//     res.send(dataupdate)
//   })
//   .catch(err => {
//     res.send(err)
//   })
// }

// var deleteTodo = (req,res) => {
//   todo.deleteOne({
//     _id: req.params.id
//   })
//   .then(deletedTodo => {
//     res.send(deletedTodo)
//   })
//   .catch(err => {
//     res.send(err)
//   })
// }


module.exports = {createTodo,getallTodo,updateTodo,deleteTodo};
