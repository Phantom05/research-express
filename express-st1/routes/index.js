
import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express' ,
    number:5,
    person:[
      '준영','첨지','지윤','민서'
    ]
  });
});

module.exports = router;
