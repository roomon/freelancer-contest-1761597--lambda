const mongoose = require('mongoose');

/**
 * Import models
 */
const Country = require('./models/Country');
const Income = require('./models/Income');
const Oil = require('./models/Oil');
const Usage = require('./models/Usage');
const Visitor = require('./models/Visitor');

/**
 * Connect to MongoDB
 * Call this function in every lambda
 */
async function db() {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

/**
 * Lambda: Bar Chart
 */
exports.barchart = async () => {
  await db();
  return await Income.find();
};

/**
 * Lambda: Line Chart
 */
exports.linechart = async () => {
  await db();
  return await Visitor.find();
};

/**
 * Lambda: Pie Chart
 */
exports.piechart = async () => {
  await db();
  return await Oil.find();
};

/**
 * Lambda: Gauge
 */
exports.gauge = async () => {
  await db();
  return await Usage.find().sort({ _id: -1 }).limit(1);
};

/**
 * Lambda: Map
 */
exports.map = async () => {
  await db();
  const countries = await Country.find();
  return countries.map((country) => ({
    title: country.name,
    latitude: country.latitude,
    longitude: country.longitude,
  }));
};
