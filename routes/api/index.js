const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);
// Matches with "/api"
router.route("/signIn")
  .post(function(req, res){
     console.log(req.body) 
     res.send("Hello World")
  });

module.exports = router;
