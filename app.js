const express = require("express");
const app = express();
const path = require("node:path");

const newRouter = require("./routes/newRouter");
const indexRouter = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/new", newRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mini message Board - listening on port ${PORT}`);
});
