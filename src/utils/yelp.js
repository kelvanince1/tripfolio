var yelp = require("node-yelp");


/* We set the require parameters here */
var required_parameters = {
  oauth_consumer_key : process.env.oauth_consumer_key,
  oauth_token : process.env.oauth_token,
  oauth_nonce : n(),
  oauth_timestamp : n().toString().substr(0,10),
  oauth_signature_method : 'HMAC-SHA1',
  oauth_version : '1.0'
};


    // Optional settings:
    httpClient: {
      maxSockets: 25  // ~> Default is 10
    }
  });


  client.search({
    terms: "Café de la presse",
    location: "BELGIUM"
  }).then(function (data) {
    var businesses = data.businesses;
    var location = data.region;
  });.then(function (data) {
  // ..
}).catch(function (err) {
  if (err.type === yelp.errorTypes.areaTooLarge) {
    alert('Area is too large.');
  } else if (err.type === yelp.errorTypes.unavailableForLocation) {
    alert('Not available for this location.')
  }
});


  client.business("grand-place-bruxelles-2", {
    cc: "US"
  }).then(function (data) {
    // ...
  });
