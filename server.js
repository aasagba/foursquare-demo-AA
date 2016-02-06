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

    var url = "https://api.foursquare.com/v2/venues/explore?near=" + location + "&client_id=HQVDVNQJDRRATTFNEE0SBDKUILFQYGHEZVYUQ3FEFQ5QSJWQ&client_secret=UUTQOYJQMNIEENRXKJ00TFIM0VDWLWE5OCXN1IUMRFL04LWD&v=20150910";

    request(url, function (error, response, body) {
        if (error) {
            console.log("Couldn’t get response because of error: " + error);
            return;
        }

        res.json(body);
    });
});

app.listen(process.env.PORT || 8082);
console.log('Magic happens on port 8082');