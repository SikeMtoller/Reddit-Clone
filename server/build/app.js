"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });
var dbo = require("./db/conn");
// var options = {
//   keepAlive: 1,
//   connectTimeoutMS: 30000,
// };
// mongoose.connect(process.env.DATABASE_URL, options, (err) => {
//   if (err) console.log(err);
// });
var indexRouter = require("./routes/login");
var usersRouter = require("./routes/users");
var homeRouter = require("./routes/home");
var app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/home", homeRouter);
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
dbo.connectToServer(function (err) {
    if (err) {
        console.error(err);
        process.exit();
    }
});
module.exports = app;
//# sourceMappingURL=app.js.map