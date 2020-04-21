const mongoose = require('mongoose');

// collection name
const collection = require('../collections.json').gauge;

// define model
const schema = new mongoose.Schema(
  {
    timestamp: Date,
    usage: Number,
  },
  { collection }
);

// export model
module.exports = mongoose.model('usage', schema);
