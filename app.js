const express = require("express");

const app = express();

// Start listening to requests

app.listen(3001);

// ROUTES

app.get("/", (req, res) => {
  res.send("This is home boyyyy");
});