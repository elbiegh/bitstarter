var express = require('express');

var app = express.createServer(express.logger());

var fs=require('fs');

// As reauested in the homework

var docstring = fs.readFileSync('index.html','utf-8').toString('utf-8');

// easier
// var docstring=fs.readFileSync('index.html','utf-8');


app.get('/', function(request, response) {
  response.send(docstring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
