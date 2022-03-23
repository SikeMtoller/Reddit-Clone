var express = require("express");
var router = express.Router();
var Community = require("../models/m_community");

//Create a Community
router
  .post("/", async function (req, res) {
    const { name, title, about } = req.body;
    const communityData = { name, title, about };
    const newCommunity = new Community(communityData);
    newCommunity
      .save()
      .then(() => {
        console.log("Saved data Succeccfully");
        res.status(200).send("WORKS");
      })
      .catch((e) => {
        console.log(e);
      });
  })
  //Search for one community
  .get("/", async function (req, res) {
    const { name } = req.query;
    const foundCommunity = await Community.find({ name }).populate("posts");
    res.send(foundCommunity);

    //http://localhost:9000/community?name=r/custom3
  });

module.exports = router;
