const mongoose = require('mongoose');
const Country = require('./models/Country');

exports.handler = async () => {
  // connect to mongodb
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const countries = await Country.find();

  // return mapped response
  return countries.map((country) => ({
    title: country.name,
    latitude: country.latitude,
    longitude: country.longitude,
  }));
};
