const request = require('request');

const getcode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1IjoieW91c3NlZjU0IiwiYSI6ImNsN2s1M3RyNzAyd2EzdnQ1cXoyeXU3enAifQ.SAGYcI0y92nOxQkBHvCWFw&limit=1';

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.features.length === 0) {
      callback('unable to find location try another search', undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitdue: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = getcode;
