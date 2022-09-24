const getcode = require('./utils/getcode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  console.log('Please Provide an andress');
} else {
  getcode(address, (error, { latitude, longitdue, location } = {}) => {
    if (error) {
      console.log(error);
    }

    forecast(latitude, longitdue, (error, forecastData) => {
      if (error) {
        console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
}
