const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

/*
get endpoint for /posts route. Because there is a middleware in app.js,
is not necessary to specify here the route, because now router is like the
representation of the /posts routes, and we can complement it with a
more specific uri
*/
// use: get all the posts
router.get("/", async (req, res) => {
  try{
    const posts = await Post.find();
    res.json(posts);
  }catch(err){
    res.json({message:err})
  }
});

// use: get a specific post
router.get("/:postId", (req,res))

// example of subroute of /posts route
router.get("/specific", (req, res) => {
  res.send("Specific route mate");
});

/*
post endpoint for /posts. If we want to console.log, we cannot log the body because
is going to print it as undefined. For that a middleware was added to parse the body.
use: post a post hehe
*/
router.post("/", async (req, res) => {
  const post = new Post({
    // console.log(req.body);
    title: req.body.title,
    description: req.body.description
  });

  // saves the post in the DB, .save() returns a Promise it has to be processed
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
  // 2nd option
  // post.save()
  // .then(data => {
  //   res.status(200).json(data);
  // })
  // .catch(err => {
  //   res.status(404).json({ message: err })
  // })
});

module.exports = router;