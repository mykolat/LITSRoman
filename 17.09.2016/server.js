
var express = require('express');
var app = express();
var random.js = require('random.js');

app.get('/', function (req, res) {
  res.send("" + random.js);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
