var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var User = require("../models/m_user");
router.route("/").post(async (req, res) => {
    const { fullname, password, email, birthday, username, about } = req.body;
    try {
        const user = new User({
            fullname,
            email,
            birthday,
            username,
            about,
        });
        const registeredUser = User.register(user, password);
        await registeredUser.save();
        req.session.userID = user._id;
    }
    catch (e) {
        console.log(e);
    }
});
module.exports = router;
//# sourceMappingURL=register.js.map