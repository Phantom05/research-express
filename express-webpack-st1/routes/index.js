var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(__dirname,'__dirname');
  
  // res.sendFile(__dirname+'/../build/index.html');
  // res.sendFile(path.join(__dirname+'/../build/index.html'));
  res.sendFile(path.join(__dirname+'/../build/index.html'))
});

module.exports = router;
