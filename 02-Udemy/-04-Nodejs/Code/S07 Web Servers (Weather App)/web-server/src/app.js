const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

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

// Goal: Create and render a 404 page with handlebars

// 1. Setup the template to render the header and footer
// 2. Setup the template to render an error message in a paragraph
// 3. Render the template for both 404 routes
// Page not found.
// Help article not found.
// 4. Test your work. Visit /what and /help/units

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
  res.send({
    foreast: 'it is snowing',
    location: 'Philidalphia',
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

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
