const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  const authorName = req.body.authorName;
  const authorMessage = req.body.authorMessage;
  messages.push({
    text: authorMessage,
    user: authorName,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
