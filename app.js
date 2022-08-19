const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();

// import routes
const postsRoute = require("./routes/posts");
// add middleware to be able to go to posts route
app.use("/posts", postsRoute);

// Start listening to requests

app.listen(3001);

// MIDDLEWARES > function that will execute when a route is hit

// app.use("/posts", () => {
//   console.log("this is a middleware");
// });

// ROUTES

// get endpoint for home (/) route
app.get("/", (req, res) => {
  res.send("This is home boyyyy");
});




// Connect to DB
mongoose.connect(process.env.DB_URL, () => {
  console.log("connected to db");
})