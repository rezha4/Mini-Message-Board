const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const indexRouter = require("./routes/index");

app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(3000);
