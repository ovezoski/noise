var http = require("http");
var app = require("./kola.js")
var server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end(app(request));
});
server.listen(8080, "localhost");
console.log("Server running at http://localhost:8080/");
