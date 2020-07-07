var http = require('http');
var url = require('url');
var fs = require('fs');



var server = http.createServer(function(request,response){
  var url = request.url;
  if(request.url == '/'){
    url = '/index.html';
  }
  if(request.url == '/hello'){
    
    url = '/hello.html';
    response.end(JSON.stringify({result:1}));
  }
  if(request.url == '/favicon.ico'){
    return response.writeHead(404);
  }
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + url));

});


let port = 9995;
server.listen(port, function(){ 
    console.log(`${port} is Running..`);
});



