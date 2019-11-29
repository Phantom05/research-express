var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var engine = require('ejs-mate');
var {myFileLoad} = require('./lib/utils');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.engine('ejs' , engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: '@#@$yolo#@$#$',
  resave: false,
  saveUninitialized: true,
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use('components',express.static(path.join(__dirname, 'views/components')));


app.use((req, res, next)=>{
  
  req.session.cashData = {};
  res.locals.__views = __dirname + '/views';
  res.locals.__components = __dirname + '/views/components';
  res.locals.__pages = __dirname + '/views/pages';
  res.locals.fileLoader = myFileLoad;
  res.locals.__layout_path= __dirname + '/views/components/base/helpers/layout';
  // res.locals.partial = function(name){
  //   `views/components/base/${name}`
  // }

  next()
})

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
