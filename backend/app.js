const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./db/connect");

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());

const userRouter = require("./routes/User");
const questionRouter = require("./routes/Question");

app.use(express.json());
app.use(userRouter);
app.use(questionRouter);

app.get("/", (req, res) => {
  res.send({ test: "hey" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
