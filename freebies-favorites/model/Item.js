const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  giveaway_url: {
    type: String,
    required: false
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);