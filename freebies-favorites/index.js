const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Item = require('./model/Item');

const app = express();
app.use(bodyParser.json());

const port = 4102;

mongoose
  .connect('mongodb://mongo:27017/freebies-app', {useNewUrlParser: true})
  .then(() => console.log('MongoDb Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.json({'freebies-favorites': 'version 1.0.0'});
});

app.get('/favorites', (request, response) => {
  Item.find()
    .then(items => response.json(items))
    .catch(err => response.status(404).json({ msg: 'No items found' }));
});

app.post('/favorites', (request, response) => {
  const newItem = new Item({
      title: request.body.title,
      thumbnail: request.body.thumbnail,
      description: request.body.description,
      giveaway_url: request.body.giveaway_url_open
    }
  );

  newItem.save(response.json(newItem));
});

app.delete('/favorites/:id', (request, response) => {
  const id = request.params.id;
  Item.deleteOne({_id: id})
    .then(val => response.json(val))
});

app.listen(port, () => {
  console.log(`Freebies Favorites is listening at http://localhost:${port}`);
});