var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
var cors = require("cors");
var User = require("./models/m_user");
var mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require("express-session");
var passport = require("passport");
const LocalStrategy = require("passport-local");
dotenv.config({ path: __dirname + "/.env" });
const connectionString = process.env.DATABASE_URL;
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected!!!!");
});
var usersRouter = require("./routes/users");
var postRouter = require("./routes/posts");
var communityRouter = require("./routes/communities");
var registerRouter = require("./routes/register");
var loginRouter = require("./routes/login");
var logoutRouter = require("./routes/logout");
var app = express();
const isLoggedin = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.status(401).send("Please Log in");
    }
};
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(passport.initialize());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
}));
app.use(cookieParser());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/post", postRouter);
app.use("/users", usersRouter);
app.use("/community", communityRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
module.exports = app;
//# sourceMappingURL=app.js.map