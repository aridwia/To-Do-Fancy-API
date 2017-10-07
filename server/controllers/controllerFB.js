var FB = require('fb');
const express = require('express');
var router = express.Router();


router.get('/',(req,res,next) => {
  res.send({msg: 'wellcome'})
})

router.get('/facebook/me')
