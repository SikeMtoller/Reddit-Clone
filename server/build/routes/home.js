var express = require("express");
var router = express.Router();
var dbo = require("../db/conn");
router.route("/").get(async function (req, res) {
    const dbConnect = dbo.getDb();
    dbConnect
        .collection("posts")
        .find({})
        .limit(10)
        .toArray(function (err, result) {
        if (err) {
            res.status(400).send("Error fetching listings!");
        }
        else {
            res.json(result);
        }
    });
});
module.exports = router;
//# sourceMappingURL=home.js.map