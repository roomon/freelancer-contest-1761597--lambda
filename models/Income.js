const mongoose = require('mongoose');

// collection name
const collection = require('../collections.json').barchart;

// define model
const schema = new mongoose.Schema(
  {
    year: Number,
    income: Number,
  },
  { collection }
);

// export model
module.exports = mongoose.model('income', schema);
