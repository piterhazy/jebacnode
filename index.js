
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;


const server = http.createServer(function(req, res) {


    res.writeHead(200, {'Content-Type': 'text/plain'});


    res.end('pierdolic orka\n');
});


server.listen(port, hostname, function() {
    console.log(`jebac disa na http://${hostname}:${port}/`);
})