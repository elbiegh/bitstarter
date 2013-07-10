var express = require('express');

var app = express.createServer(express.logger());

var fs=require('fs');
var docbuf=fs.readFileSync("/home/ubuntu/bitstarter/index.html");
var docs = docbuf.toString('utf8');

app.get('/', function(request, response) {
  response.send(doc);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
