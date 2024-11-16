const { Router } = require("express");
const messageController = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/:messageId", messageController.getMessage);
module.exports = messageRouter;
