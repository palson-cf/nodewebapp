var http = require('http');
var handleRequest = function (request, response) {
  response.writeHead(200);
  
  response.end('Hello from Node Server App deployed on ECS Fargate demo application!. Test3. Green Service');
  
};
var www = http.createServer(handleRequest);
www.listen(8081,function(){

    console.log("server listnening on 8081");
    console.log("server listnening on 8081");
});
