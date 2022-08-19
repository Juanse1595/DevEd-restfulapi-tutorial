const express = require("express");
const router = express.Router();

/* get endpoint for /posts route. Because there is a middleware in app.js,
is not necessary to specify here the route, because now router is like the
representation of the /posts routes, and we can complement it with a
more specific uri*/
router.get("/", (req, res) => {
  res.send("This is posts.. man");
});

// example of subroute of /posts route
router.get("/specific", (req, res) => {
  res.send("Specific route mate");
});

module.exports = router;