
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Mykola I do my first sever i want to hack pentagon");
  response.end();
}).listen(999);
