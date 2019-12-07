// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// exports.index = function(req, res){
//   res.render('index', { name: 'John' });
// };

// module.exports = router;

app.get('/', function (req, res) {
  res.locals.lang = 'en';
  res.render('users', {
    users: [
      {name: 'Max'},
      {name: 'Bob'}
    ]
  });
});