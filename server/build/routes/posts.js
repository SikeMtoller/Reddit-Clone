var express = require("express");
var router = express.Router();
const Post = require("../models/m_post");
var Community = require("../models/m_community");
router
    .route("/:id")
    .get(async function (req, res) {
    const { id } = req.params;
    const foundPost = await Post.findById(id, (err) => {
        console.log(err);
    })
        .clone()
        .catch((e) => console.log(e));
    if (foundPost) {
        res.send(foundPost).status(200);
    }
    else {
        res.status(404).send("Post Not Found");
    }
})
    //this route finds ONE post =>
    .post(async function (req, res) {
    const { title, body, community } = req.body;
    const foundCommunity = await Community.find({ name: community })
        .then((data) => {
        if (data.length) {
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
                Community.findOneAndUpdate({ name: community }, { $push: { posts: newPost } }).catch((e) => {
                    console.log(e);
                });
            })
                .catch((e) => {
                console.log(e);
            });
        }
        else {
            res.status(404).send("No Community Found");
        }
    })
        .catch((e) => {
        res.status(404).send("ERROR QUERYING COMMUNITY");
    });
});
module.exports = router;
//# sourceMappingURL=posts.js.map