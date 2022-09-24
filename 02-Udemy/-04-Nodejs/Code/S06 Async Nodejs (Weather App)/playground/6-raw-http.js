const http = require('http');

const url =
  'http://api.weatherstack.com/current?access_key=9c1ecff3873b234280f1e01e1660e64a&query=40,-75units=f';

const request = http.request(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
  console.log('An error', error);
});

request.end();
