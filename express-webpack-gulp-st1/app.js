// const cookieParser = require('cookie-parser');
// const express = require('@react-ssr/express');
// const createError = require('http-errors');
// const logger = require('morgan');
// const path = require('path');

// var indexRouter = require('./routes/index');
// // var usersRouter = require('./routes/users');

// var app = express();


// var options = { beautify: true };
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine(options));

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// // app.use('/', indexRouter);
// app.get('/', require('./routes').index);
// // app.use('/users', usersRouter); 

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;


// const express = require('express')
// const app = express()

// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())

// app.get('/', (req, res) => {
//   res.render('about', { name: 'Flavio' })
// })

// app.listen(3000, () => console.log('Server ready'))

const express = require('express');
const app = express();
const options = require('express-engine-jsx/options');
const requireJSX = require('express-engine-jsx/require');
const pt = require('path');

options.cache = __dirname + '/cache';
options.views = __dirname + '/views';

app.locals.component = function (path, props) {
  var currentEjsFile = this.filename;
  var currentDirectory = pt.dirname(currentEjsFile);
  var Component = requireJSX(currentDirectory + '/' + path);

  props = Object.assign({}, this, props || {});

  return ReactDOM.renderToStaticMarkup(Component(props));
};