var express = require("express");
var router = express.Router();
var User = require("../models/m_user");
var passport = require("passport");
router
    .route("/")
    .post(passport.authenticate("local", { failureRedirect: "/login" }), async function (req, res) {
    res.json("Auth Complete");
});
module.exports = router;
//# sourceMappingURL=login.js.map