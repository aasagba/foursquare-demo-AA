// modules

var express = require('express');
var request = require('request');

var app     = express();

// set the static files location
app.use(express.static(__dirname + "/public"));

app.listen(process.env.PORT || 8082);
console.log('Magic happens on port 8082');