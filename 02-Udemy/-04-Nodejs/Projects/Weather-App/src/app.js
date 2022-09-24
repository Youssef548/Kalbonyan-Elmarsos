const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/getcode');
const forecast = require('./utils/forecast');

const app = express();
const port = process.env.PORT || 3000;

// Define path for express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

// Setup static dir to server
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Youssef Ahmed',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Youssef ahmed',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'this is some helpful text ',
    title: 'Help',
    name: 'Youssef Ahmed',
  });
});

app.get('/weather', (req, res) => {
  const address = req.query.address;
  if (!address) {
    res.send({
      error: 'You must provide a address term',
    });
  }

  geocode(address, (error, { latitude, longitdue, location } = {}) => {
    if (error) {
      return res.send({
        error,
      });
    }
    forecast(latitude, longitdue, (error, forecastData) => {
      if (error) {
        return res.send({
          error,
        });
      }
      res.send({
        foreast: forecastData,
        location,
        address: req.query.address,
      });
    });
  });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term',
    });
  }
  res.send({
    products: [],
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Youssef Ahmed',
    errorMessage: 'help article not found',
  });
});

app.get('*', (req, res) => {
  res.render('', {
    title: '404',
    name: 'youssef ahmed',
    errorMessage: 'page not found',
  });
});

app.listen(port, () => {
  console.log('Server is up on port' + port);
});
