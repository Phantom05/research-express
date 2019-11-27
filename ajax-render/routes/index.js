var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',tabContent:'' });
});

router.post('/user', function(req, res, next) {
  console.log(req.body);
  let {tabContent} = req.body,list;
   if(tabContent === '된다'){
     list = [];
    for(let i = 0; i < 10; i ++){
      list.push({id:i,title:`Title ${i}`})
    }
   }
  
   res.render('index', { title: req.body.title ,tabContent,list});
});



router.route('/test/:type')
.get(function(req, res, next) {
  let cashData = req.session.cashData || {};
  console.log('test1');
  let {type} = req.params;

  if(type === 'home'){
    cashData.title = 'main';
    cashData.tabContent = 'tabContent';
  }
  if(type === 'profile'){

  }
  if(type === 'message'){
    
  }

  console.log(cashData);
  res.render('index', cashData);
})
.post( function(req, res, next) {
  // let {title,tabContent} = req.body;
  console.log('/test');
  cash = req.body;
  req.session.cashData = req.body;
  console.log(req.session,'**');
  res.json()
  // res.render('index', { title: 'Express',tabContent:'' });
});

router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'Express',tabContent:'' });
});

router.get('/project-detail', function(req, res, next) {
  res.render('pages/projectDetail/index', { title: 'Express',tabContent:'' });
});

router.get('/mypage', function(req, res, next) {
  res.render('pages/mypage/index', { title: 'Express',tabContent:'' });
});

module.exports = router;
