const mongoose = require("mongoose");

const connectString = process.env.MONGODB_URL;

mongoose.connect(connectString, {}, () => {
  console.log("Error with connection to database");
});
