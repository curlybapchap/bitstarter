var express = require('express');
var app = express.createServer(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  var string = fs.readFileSync("index.html", "utf-8");
//  var buffer = new Buffer(fs.readFile('index.html'), "utf-8");
//  response.send(buffer.toString('utf-8'));
  response.send('paul');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
