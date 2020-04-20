const mongoose = require('mongoose');

// collection name
const collection = 'map';

// define model
const schema = new mongoose.Schema(
  {
    country: String,
    latitude: Number,
    longitude: Number,
    name: String,
  },
  { collection }
);

// export model
module.exports = mongoose.model('country', schema);
