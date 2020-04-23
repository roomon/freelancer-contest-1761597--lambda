const db = require('./db');

/**
 * Import models
 */
const Country = require('./models/Country');
const Income = require('./models/Income');
const Oil = require('./models/Oil');
const Usage = require('./models/Usage');
const Visitor = require('./models/Visitor');

/**
 * Lambda: Bar Chart
 */
exports.barchart = async () => {
  await db();
  const incomes = await Income.find();
  return { statusCode: 200, body: JSON.stringify(incomes) };
};

/**
 * Lambda: Line Chart
 */
exports.linechart = async () => {
  await db();
  const visitors = await Visitor.find();
  return { statusCode: 200, body: JSON.stringify(visitors) };
};

/**
 * Lambda: Pie Chart
 */
exports.piechart = async () => {
  await db();
  const oils = await Oil.find();
  return { statusCode: 200, body: JSON.stringify(oils) };
};

/**
 * Lambda: Gauge
 */
exports.gauge = async () => {
  await db();
  const usage = await Usage.find().sort({ _id: -1 }).limit(1);
  return { statusCode: 200, body: JSON.stringify(usage.pop()) };
};

/**
 * Lambda: Map
 */
exports.map = async () => {
  await db();
  const countries = await Country.find();
  return { statusCode: 200, body: JSON.stringify(countries) };
};
