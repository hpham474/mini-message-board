const { Router } = require("express");
const messages = require("../db");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("form");
});
indexRouter.post("/", (req, res) => {
  messages.push({
    id: crypto.randomUUID(),
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = indexRouter;
