const express = require("express");
const cors = require("cors");

const data = require("./model/data");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.get("/api", (req, res) => {
    res.json(data);
  });
  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});