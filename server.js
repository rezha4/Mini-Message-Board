const express = require("express");

const app = express();

require("dotenv").config();

const mongoose = require("mongoose");

const uri = process.env.SECRET_KEY;
console.log(`uri is ${uri}`)
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const indexRouter = require("./routes/index");

app.set("view engine", "ejs");

app.use("/", indexRouter);

const hostname = "0.0.0.0";
const port = process.env.port || 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
