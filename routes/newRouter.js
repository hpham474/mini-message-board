const { Router } = require("express");
const messageController = require("../controllers/messageController");

const newRouter = Router();

newRouter.get("/", messageController.createMessageFormGet);
newRouter.post("/", messageController.createMessagePost);

module.exports = newRouter;
