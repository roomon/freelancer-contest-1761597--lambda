const mongoose = require('mongoose');

/**
 * Import the model
 */
const Country = require('./models/Country');

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
  // TODO implement
  const response = [
    {
      year: 2005,
      income: 23.5,
    },
    {
      year: 2006,
      income: 26.2,
    },
    {
      year: 2007,
      income: 30.1,
    },
    {
      year: 2008,
      income: 29.5,
    },
    {
      year: 2009,
      income: 24.6,
    },
  ];
  return response;
};

/**
 * Lambda: Line Chart
 */
exports.linechart = async () => {
  // TODO implement
  const chartData = [];
  const firstDate = new Date();
  firstDate.setDate(firstDate.getDate() - 200);
  let visits = 1200;
  for (let i = 0; i < 200; i++) {
    // we create date objects here. In your data, you can have date strings
    // and then set format of your dates using lineChart.dataDateFormat property,
    // however when possible, use date objects, as this will speed up chart rendering.
    const newDate = new Date(firstDate);
    newDate.setDate(newDate.getDate() + i);

    visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

    chartData.push({
      date: newDate,
      visits,
    });
  }
  return chartData;
};

/**
 * Lambda: Pie Chart
 */
exports.piechart = async () => {
  // TODO implement
  const response = [
    {
      country: 'Lithuania',
      litres: 501.9,
    },
    {
      country: 'Czech Republic',
      litres: 301.9,
    },
    {
      country: 'Ireland',
      litres: 201.1,
    },
    {
      country: 'Germany',
      litres: 165.8,
    },
    {
      country: 'Australia',
      litres: 139.9,
    },
    {
      country: 'Austria',
      litres: 128.3,
    },
    {
      country: 'UK',
      litres: 99,
    },
    {
      country: 'Belgium',
      litres: 60,
    },
    {
      country: 'The Netherlands',
      litres: 50,
    },
  ];
  return response;
};

/**
 * Lambda: Gauge
 */
exports.gauge = async () => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
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
