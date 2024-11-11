const { Router } = require("express");
const messages = require("../db");

const messageRouter = Router();

messageRouter.get("/:messageId", (req, res) => {
  const messageId = req.params.messageId;
  const message = messages.find((msg) => msg.id === messageId);
  res.render("message", { message: message });
});
module.exports = messageRouter;
