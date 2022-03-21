var express = require("express");
var router = express.Router();
const Community = require("../../models/m_community");
var mongoose = require("mongoose");
/* GET users listing. */
router.post("/", async function (req, res) {
    const { name } = req.body;
    const communityData = {
        name,
        title: "menash",
        about: "menashe menashnesh hita",
    };
    const newCommunity = new Community(communityData);
    newCommunity.save((e) => {
        if (e) {
            console.log("ERROR");
        }
        else {
            console.log("DATA SAVED!");
        }
    });
});
module.exports = router;
//# sourceMappingURL=community.js.map