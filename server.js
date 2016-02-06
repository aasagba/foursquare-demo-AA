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
    var json = [];

    request({url: url, json: true}, function (error, response, body) {
        if (error) {
            console.log("Couldn’t get response because of error: " + error);
            return;
        }

        var results = body.response.groups[0].items;


        for (var i = 0; i < results.length; i++){
            var name = ' ', url = ' ', rating = ' ';

            if (results[i].venue.url != undefined){
                url = results[i].venue.url;
            }

            if (results[i].venue.name != undefined){
                name = results[i].venue.name;
            }

            if (results[i].venue.rating != undefined){
                rating = results[i].venue.rating;
            }

            console.log(
                "\nName: " + name +
                "\nUrl: " + url +
                "\nRating: " + rating
            );

            json.push({
                name: name,
                url: url,
                rating: rating
            });
        }

        res.json(json);
    });
});

app.listen(process.env.PORT || 8082);
console.log('Magic happens on port 8082');