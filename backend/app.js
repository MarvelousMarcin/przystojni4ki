const express = require("express");

require("dotenv").config();
require("./db/connect");

const PORT = process.env.PORT || 4000;
const app = express();

const userRouter = require('./routes/User');
const questionRouter = require('./routes/Question');

app.use(express.json());
app.use(userRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
