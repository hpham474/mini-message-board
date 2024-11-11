const { Router } = require("express");
const messages = require("../db");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});
module.exports = indexRouter;
