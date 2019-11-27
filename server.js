const http = require('http');
const fs = require ('fs');

const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html ; charset=utf-8'}),
    res.write('<h1>Hello Browser!</h1>'),
    res.end()
})

server.listen(8081);