const mongoose = require('mongoose');

// collection name
const collection = require('../collections.json').linechart;

// define model
const schema = new mongoose.Schema(
  {
    date: Date,
    visits: Number,
  },
  { collection }
);

// export model
module.exports = mongoose.model('visitor', schema);
