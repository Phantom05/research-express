
import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    number:5,
    person:[
      '짜장','짬뽕','탕수육','울면'
    ],
    fluit:[
      {id:1,name:"사과"},
      {id:2,name:"바나나"},
      {id:3,name:"딸기"},
    ],
    test:{
      firstname:"준영",
      lastName:"이"
    },
    nav: [
      { url: "http://www.yehudakatz.com", title: "Katz Got Your Tongue" },
      { url: "http://www.sproutcore.com/block", title: "SproutCore Blog" }
    ],
    v1:true,
    v2:false
  });
});

module.exports = router;
