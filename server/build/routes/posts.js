var express = require("express");
var router = express.Router();
/* GET home page. */
//this route fins ONE post =>
router.route("/").get(async function (req, res) {
    // const { postId } = req.query;
    // console.log(req.query);
    // const post = dbConnect.collection("posts").find({ _id: postId });
    // console.log(`post=${post}`);
    // res.json(post);
});
// implement AUTH here (?)
module.exports = router;
//# sourceMappingURL=posts.js.map