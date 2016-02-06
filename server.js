// modules

var express = require('express');
var request = require('request');

var app     = express();

// set the static files location
app.use(express.static(__dirname + "/public"));

app.get('/location/:location', function (req, res) {
    console.log("I recieved a get request");

    var location = req.params.location;
    console.log(location);
});

app.listen(process.env.PORT || 8082);
console.log('Magic happens on port 8082');