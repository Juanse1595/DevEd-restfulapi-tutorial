const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const app = express();

// import routes
const postsRoute = require("./routes/posts");

// Middlewares. The order matters
// bodyParser will convert the request body to json
app.use(bodyParser.json());
// add middleware to be able to go to posts route
app.use("/posts", postsRoute);

// Start listening to requests
app.listen(3001, () => console.log("API started succesfully"));

// ROUTES
// get endpoint for home (/) route
app.get("/", (req, res) => {
  res.send("This is home boyyyy");
});




// Connect to DB
mongoose.connect(process.env.DB_URL, () => {
  console.log("connected to db");
})


//                             NOTES

/* MIDDLEWARES > function that will execute when a route is hit
app.use("/posts", () => {
  console.log("this is a middleware");
}); */