var distance = require('google-distance-matrix');

var origins=['agra'];
    var destinations=['delhi'];
    distance.key( "AIzaSyADf9ZIvLxPoOoHTnnCDMcy6yZ9oPMDg6Q");
    
    distance.matrix(origins, destinations, function (err, distances) {
    if (err) {
        return console.log(err);
    }
    if(!distances) {
        return console.log('no distances');
    }
    if (distances.status == 'OK') {
        for (var i=0; i < origins.length; i++) {
            for (var j = 0; j < destinations.length; j++) {
                var origin = distances.origin_addresses[i];
                var destination = distances.destination_addresses[j];
                if (distances.rows[0].elements[j].status == 'OK') {
                    var duration = distances.rows[i].elements[j].duration.text;
                    console.log('Distance from ' + origin + ' to ' + destination + ' is ' + duration);
                } else {
                    console.log(destination + ' is not reachable by land from ' + origin);
                }
            }
        }
    }
})	
