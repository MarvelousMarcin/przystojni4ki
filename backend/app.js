const express = require("express");

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
