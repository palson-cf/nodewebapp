var http = require('http');
var handleRequest = function (request, response) {
  response.writeHead(200);
  
  response.end('Hello from Node Server App deployed on ECS Fargate demo application!');
  
};
var www = http.createServer(handleRequest);
www.listen(8080,function(){

    console.log("server listnening on 8080");
});