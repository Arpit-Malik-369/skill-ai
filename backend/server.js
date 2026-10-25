const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const dns = require("dns");

dns.setServers(["1.1.1.1","8.8.8.8"])
const app = express();

app.use(express.json());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
app.get("/", (req, res) => {
  res.send("Skiills Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
