const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const path = require("path");
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use("/", express.static(path.join(__dirname, "client", "dist", "spa")));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server Started:${port}`);
});
