const express = require("express");
const app = express();
const path = require("node:path");

const newRouter = require("./routes/newRouter");
const messageRouter = require("./routes/messageRouter");
const indexRouter = require("./routes/indexRouter");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/new", newRouter);
app.use("/message", messageRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mini message Board - listening on port ${PORT}`);
});
