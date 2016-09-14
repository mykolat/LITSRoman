
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("");
  response.end();
}).listen(999);


var petro = setInterval(function loma(){
  var m = new Date();
var c = Math.floor(Math.random()*m.getMinutes()+0)//
console.log(c);//виводить в консоль з ноде.джс не знаю як вивести на сам сайт
},10000);
