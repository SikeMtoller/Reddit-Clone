var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
var User = require("../models/m_user");
router.route("/").post(async (req, res) => {
  const { fullname, password, email, birthday, username, about } = req.body;
  const hash = await bcrypt.hash(password, 12);
  try {
    const user = new User({
      fullname,
      password: hash,
      email,
      birthday,
      username,
      about,
    });

    await user.save();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
