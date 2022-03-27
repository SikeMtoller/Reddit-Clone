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
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (e) {
    console.log(e);
    // Add something to tell user a User already Exists
  }
});

module.exports = router;
