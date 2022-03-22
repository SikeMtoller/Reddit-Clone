var express = require("express");
var router = express.Router();
const Post = require("../models/m_post");
router
    .route("/")
    .get(async function (req, res) {
    res.send("menashe");
})
    //this route finds ONE post =>
    .post(async function (req, res) {
    const { title, body, community } = req.body;
    const postData = {
        title,
        body,
        author: "meni",
        community,
        image: "",
    };
    const newPost = new Post(postData);
    newPost
        .save()
        .then(() => {
        console.log("Saved data Succeccfully");
        res.status(200).send("WORKS");
    })
        .catch((e) => {
        console.log(e);
    });
});
module.exports = router;
//# sourceMappingURL=posts.js.map