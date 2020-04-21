const mongoose = require('mongoose');

// collection name
const collection = require('../collections.json').piechart;

// define model
const schema = new mongoose.Schema(
  {
    country: String,
    litres: Number,
  },
  { collection }
);

// export model
module.exports = mongoose.model('oil', schema);
