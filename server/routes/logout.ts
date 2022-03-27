var express = require("express");
var router = express.Router();

router.route("/").get(function (req, res) {
  req.logout();
  res.send("Logout successfull");
});

module.exports = router;
