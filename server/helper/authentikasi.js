var jwt = require('jsonwebtoken');
require('dotenv').config()

var islogin = (req,res,next) => {
  jwt.verify(req.headers.token,process.env.SECRET_TOKEN,function(err,decoded){
    if(!err){
      req.id = decoded.id
      next()
    } else {
      res.send(err)
    }
  })
}

var isuser = (req,res,next) => {
  if(req.id == req.body.createdby){
    next()
  } else {
    res.send('anda tidak punya akses')
  }
}

module.exports = {islogin,isuser};
