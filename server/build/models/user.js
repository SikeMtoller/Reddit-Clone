"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    birthday: {
        type: Date,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    about: {
        type: String,
    },
});
let Post = mongoose.model("User", userSchema);
module.exports = Post;
//# sourceMappingURL=user.js.map