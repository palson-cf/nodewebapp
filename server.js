var http = require('http');
var handleRequest = function (request, response) {
  response.writeHead(200);
  
  response.end('Hello from Node Server App deployed on ECS Fargate demo application!. Test2');
  
};
var www = http.createServer(handleRequest);
www.listen(80,function(){

    console.log("server listnening on 80");
    console.log("server listnening on 80");
});