const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
}

async function getMessage(req, res) {
  const messageId = req.params.messageId;
  const message = await db.getMessage(messageId);

  res.render("message", { message: message[0] });
}

async function createMessageFormGet(req, res) {
  res.render("form");
}

async function createMessagePost(req, res) {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  await db.insertMessage(messageText, messageUser);

  res.redirect("/");
}

module.exports = {
  getMessages,
  getMessage,
  createMessageFormGet,
  createMessagePost,
};
