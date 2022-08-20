const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

/*
get endpoint for /posts route. Because there is a middleware in app.js,
is not necessary to specify here the route, because now router is like the
representation of the /posts routes, and we can complement it with a
more specific uri
*/
router.get("/", (req, res) => {
  res.send("This is posts.. man");
});

// example of subroute of /posts route
router.get("/specific", (req, res) => {
  res.send("Specific route mate");
});

/*
post endpoint for /posts. If we want to console.log, we cannot log the body because
is going to print it as undefined. For that a middleware was added to parse the body.
*/
router.post("/", async (req, res) => {
  const post = new Post({
    // console.log(req.body);
    title: req.body.title,
    description: req.body.description
  });

  // saves the post in the DB, .save() returns a Promise it has to be processed... or not really
  const savedPost = await post.save();
    // .then(data => {
    //   res.status(200).json(data);
    // })
    // .catch(err => {
    //   res.status(404).json({ message: err })
    // })
});

module.exports = router;