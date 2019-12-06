var express = require('express');
var router = express.Router();

// /* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('pages/about')
});
router.get('/hello/:tab', function(req, res, next) {
  const {tab} = req.params;
  res.render('pages/about',{tab})
});


module.exports = router;
