import createError from 'http-errors';
import express   from 'express';
import path   from 'path';
import cookieParser   from 'cookie-parser';
import logger   from 'morgan';
import exphbs   from 'express-handlebars';
import {helpers} from './views/base/helpers';

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var hbs = exphbs.create({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/',
  helpers:helpers,
});

console.log(helpers,'helpers');

app.engine('hbs', hbs.engine);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs'); // handlebars파일의 확장자를 hbs로 사용.
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.locals.message = err.message;
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
