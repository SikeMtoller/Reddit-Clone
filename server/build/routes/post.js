var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
/* GET home page. */
router.route("/").get(async function (req, res) {
  const dbConnect = dbo.getDb();
  const postID = req.params;
  dbConnect
    .collection("posts")
    .find({})
    .limit(10)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
});
// implement AUTH here (?)
module.exports = router;
//# sourceMappingURL=post.js.map
