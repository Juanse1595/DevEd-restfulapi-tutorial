const express = require("express");

const app = express();

// Start listening to requests

app.listen(3001);

// ROUTES

// get endpoint for home route
app.get("/", (req, res) => {
  res.send("This is home boyyyy");
});

app.get("/posts", (req, res) => {
  res.send("This is posts.. man");
});