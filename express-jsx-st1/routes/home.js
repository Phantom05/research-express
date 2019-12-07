var express = require('express');
var router = express.Router();
var axios = require('axios');
// /* GET users listing. */
router.get('/', async function(req, res, next) {
  const config={
    url:`http://15.164.27.98:13750/dp/api/client/list?page=1`,
  }
  const {data}= await axios(config);
  if(data){
    res.render('index',{data})
  }
  
});


module.exports = router;
