const express = require("express");

require("dotenv").config();
require("./db/connect");

const PORT = process.env.PORT || 4000;
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
