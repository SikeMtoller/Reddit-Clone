var express = require("express");
var router = express.Router();
var { getDb } = require("../../db/conn");
/* GET home page. */
//this route fins ONE post =>
router.route("/").get(async function (req, res) {
    const { postId } = req.params;
    console.log(req.params);
    console.log(postId);
    const dbConnect = getDb();
    const post = dbConnect.collection("posts").find({ _id: postId });
    res.json(post);
});
// implement AUTH here (?)
module.exports = router;
//# sourceMappingURL=post.js.map