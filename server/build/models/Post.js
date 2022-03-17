"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const comment_1 = require("./comment");
let Schema = mongoose.Schema;
let postSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    author: {
        type: String,
    },
    comments: [{ type: comment_1.default }],
}, { timestamps: true });
let Post = mongoose.model("post", postSchema);
module.exports = Post;
//# sourceMappingURL=Post.js.map