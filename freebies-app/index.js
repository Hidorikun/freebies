const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 4100;

app.get('/', (req, res) => {
  res.json({'freebies app': 'version 1.0.0'})
});

app.post('/items', (req, response) => {
  request.get('http://freebies-search:4101/items', {json: req.body}, (err, res, body) => {
    if (err) { return console.log(err); }
    response.json(body);
  });
});

app.get('/favorites', (req, response) => {
  request.get('http://freebies-favorites:4102/favorites', {json: true}, (err, res, body) => {
    if (err) { return console.log(err); }
    response.json(body);
  });
});

app.delete('/favorites/:id', (req, response) => {
  const id = req.params.id;
  request.delete(`http://freebies-favorites:4102/favorites/${id}`, {json: true}, (err, res, body) => {
    if (err) { return console.log(err); }
    response.json(body);
  });
});

app.post('/favorites', (req, response) => {
  request.post('http://freebies-favorites:4102/favorites', {json: req.body}, (err, res, body) => {
    if (err) { return console.log(err); }
    response.json(body);
  });
});

app.listen(port, () => {
  console.log(`Freebies App is listening at http://localhost:${port}`);
});