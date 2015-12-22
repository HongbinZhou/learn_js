var http = require ('http');
var ip = "10.120.20.79";
var port = "1337";

http.createServer(function (req, res)
		  {
		  res.writeHead(200, {'Content-Type': 'text/plain'});
		  res.end('Hello world!\n');
		  }).listen(port, ip);
console.log("Server running at: %s:%s", ip, port);
