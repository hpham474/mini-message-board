const express = require("express");
const app = express();
const newRouter = require("./routes/newRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/new", (req, res) => res.send("New route"));
app.use("/", (req, res) => res.send("Index route"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mini message Board - listening on port ${PORT}`);
});
