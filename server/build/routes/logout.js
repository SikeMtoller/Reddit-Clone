var express = require("express");
var router = express.Router();
router.route("/").get(function (req, res) {
    req.session.userID = null;
    res.send("Logout succeccfull");
});
module.exports = router;
//# sourceMappingURL=logout.js.map