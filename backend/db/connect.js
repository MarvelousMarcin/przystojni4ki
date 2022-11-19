const mongoose = require("mongoose");

const connectString = process.env.MONGODB_URL;

mongoose.connect(connectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log("Connected to database");
});

mongoose.connection.on("error", console.error.bind(console, "Connection error"));
