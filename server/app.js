var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors')
var FB = require('fb');

mongoose.connect('mongodb://aridwia:23aridwia@tododb-shard-00-00-w8iqg.mongodb.net:27017,tododb-shard-00-01-w8iqg.mongodb.net:27017,tododb-shard-00-02-w8iqg.mongodb.net:27017/test?ssl=true&replicaSet=todoDB-shard-0&authSource=admin',(err) => {
  if(err){
    console.log(err);
  } else {
    console.log("database connected");
  }
})
var app = express();
app.use(cors())



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var index = require('./routes/index');
var users = require('./routes/users');
var todo = require('./routes/todo');

app.use('/', index);
app.use('/users', users);
app.use('/todo', todo);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
