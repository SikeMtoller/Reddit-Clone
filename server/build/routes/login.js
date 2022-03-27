var express = require("express");
var router = express.Router();
var User = require("../models/m_user");
var passport = require("passport");
router
    .route("/")
    .post((req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err)
            throw err;
        if (!user)
            res.send("No User Exists");
        else {
            req.logIn(user, (err) => {
                if (err)
                    throw err;
                res.send("Successfully Authenticated");
                console.log(req.user);
            });
        }
    })(req, res, next);
});
;
module.exports = router;
//# sourceMappingURL=login.js.map