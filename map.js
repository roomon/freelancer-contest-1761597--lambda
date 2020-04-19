const mongoose = require("mongoose");

// collection name
const collection = "countries";

exports.handler = async () => {
  // connect to mongodb
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

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

  // assign model
  const Country = mongoose.model("country", schema);

  // fetch data
  const countries = await Country.find();

  // return mapped response
  return countries.map((country) => ({
    title: country.name,
    latitude: country.latitude,
    longitude: country.longitude,
  }));
};
