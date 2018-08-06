/*
Este arquivo é o responsável por implementar o
servidor web propriamente dito.
*/

var http = require('http'),
    config = require('./config'),
    filehandler = require('./filehandler'),
    parse = require('url').parse,
    types = config.types,
    rootFolder = config.rootFolder,
    defaultIndex = config.defaultIndex,
    server;

module.exports = server = http.createServer();

server.on('request', onRequest);

function onRequest(req, res){
    var filename = parse(req.url).pathname,
        fullPath, 
        extensao;

    if(filename === '/'){
        filename = defaultIndex;
    }

    fullPath = rootFolder + filename;
    extensao = filename.substr(filename.lastIndexOf('.') + 1);

    filehandler(fullPath, (data) =>{
        res.writeHead(200, {
            'Content-Type' : types[extensao] || 'text/plain',
            'Content-Length': data.length
        });
        res.end(data);
    }, (err) =>{
        res.writeHead(404);
        res.end();
    });
}