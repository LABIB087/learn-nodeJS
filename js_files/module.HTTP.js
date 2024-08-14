// creating a http server by using http module
// require http module
const http = require('http')

// creating a server object
http.createServer(function(req, res){
    // setting http response header
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('hello server')
    res.end()
}).listen(5790)

console.log('Server is running at http://localhost:5790')

// thats all for http module to learn